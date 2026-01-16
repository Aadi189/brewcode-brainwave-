import os
import sys
import importlib.util

def check_file_exists(filename):
    if os.path.exists(filename):
        print(f"✅ {filename} found.")
        return True
    else:
        print(f"❌ {filename} missing!")
        return False

def check_env_vars():
    required_vars = [
        "SUPABASE_URL",
        "SUPABASE_KEY",
        "SUPABASE_JWT_SECRET",
        "ONDEMAND_API_KEY",
        "ONDEMAND_BASE_URL"
    ]
    # Check if .env file exists for local dev, but for prod this script might run in an env where vars are already loaded.
    # We'll just check os.environ for now, assuming dotenv might be loaded or we are in an env.
    try:
        from dotenv import load_dotenv
        load_dotenv()
    except ImportError:
        print("⚠️  python-dotenv not installed. Skipping .env file load (this is fine if you just want to check file existence).")
    
    missing = []
    for var in required_vars:
        if not os.getenv(var):
            missing.append(var)
    
    if missing:
        print(f"⚠️  Missing Environment Variables (Ensure these are set in Railway): {', '.join(missing)}")
    else:
        print("✅ Environment Variables check passed (locally).")

def check_importability():
    print("🔄 Checking if app can be imported...")
    try:
        # Add current directory to path so imports work
        sys.path.append(os.getcwd())
        # Try to resolve main.app
        spec = importlib.util.spec_from_file_location("main", "main.py")
        if spec and spec.loader:
             # We won't actually execute the module to avoid running side-effects (like DB connections) excessively,
             # but loading it is a good syntax/import check.
             # However, loading often triggers immediate execution of top-level code.
             # Let's try a safer check: can we just find the file and is it valid python?
             with open("main.py", "r") as f:
                 compile(f.read(), "main.py", "exec")
             print("✅ main.py syntax is valid.")
        else:
            print("❌ Could not find main.py module spec.")
            return False
    except Exception as e:
        print(f"❌ Import/Syntax Check Failed: {e}")
        return False
    return True

def main():
    print("🚀 Starting Deployment Readiness Check...")
    
    files_to_check = ["railway.json", "Procfile", "requirements.txt", "main.py"]
    all_files_present = all(check_file_exists(f) for f in files_to_check)
    
    if not all_files_present:
        print("\n❌ CRITICAL: Missing key deployment files. See checks above.")
        sys.exit(1)
        
    check_env_vars()
    
    if check_importability():
        print("\n✅ READY FOR DEPLOYMENT!")
        print("👉 Don't forget to set ROOT DIRECTORY to 'backend' in Railway settings.")
    else:
        print("\n❌ Codebase issues detected.")
        sys.exit(1)

if __name__ == "__main__":
    main()
