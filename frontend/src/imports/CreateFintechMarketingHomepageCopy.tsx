import svgPaths from "./svg-lhrq8qyfo2";
const imgContainer = "https://placehold.co/100x100";

function Heading2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[0.1996px] uppercase">NIFTY 50</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-0 top-0 w-[148.57px]" data-name="Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[30px] text-white tracking-[0.3955px]">23,456.78</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute h-[28px] left-[160.57px] top-[8.5px] w-[153.93px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#00a63e] text-[18px] top-0 tracking-[-0.4395px]">+156.34 (+0.67%)</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[36.5px] relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[60.5px] relative shrink-0 w-[314.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading2 />
        <Container />
      </div>
    </div>
  );
}

function Container2() {
  return <div className="bg-[#4a5565] h-[64px] shrink-0 w-px" data-name="Container" />;
}

function Heading4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[0.1996px] uppercase">SENSEX</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-0 top-0 w-[144.18px]" data-name="Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[36px] not-italic relative shrink-0 text-[30px] text-white tracking-[0.3955px]">77,234.56</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[28px] left-[156.18px] top-[8.5px] w-[154.219px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#00a63e] text-[18px] top-0 tracking-[-0.4395px]">+234.12 (+0.30%)</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[36.5px] relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[60.5px] relative shrink-0 w-[310.398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading4 />
        <Container3 />
      </div>
    </div>
  );
}

function Container5() {
  return <div className="bg-[#00c950] opacity-69 rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text4() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px]">Live</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[42.75px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container5 />
        <Text4 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[23.914px] pr-[23.93px] py-0 relative size-full">
          <Container1 />
          <Container2 />
          <Container4 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#101828] h-[130px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[33px] px-[33px] relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function ClientLogos() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col h-[228px] items-start left-0 pb-px pt-[49px] px-[80px] top-[594.5px] w-[1230px]" data-name="ClientLogos">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid border-t inset-0 pointer-events-none" />
      <Container8 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.5px] tracking-[0.5496px] uppercase">Modular solutions</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[180px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[60px] left-0 not-italic text-[#101828] text-[48px] top-[0.5px] tracking-[0.3516px] w-[553px]">A fully integrated suite of financial and payments products</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[117px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[#4a5565] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[648px]">Reduce costs, grow revenue, and run your business more efficiently on a fully integrated, AI-powered platform. Use the Stripe products individually or combine them to address your specific needs: manage revenue operations, and launch (or invent) new business models.</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[357px] items-start left-[80px] top-0 w-[672px]" data-name="Container">
      <Paragraph />
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function Container10() {
  return <div className="bg-[#155dfc] rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[78.523px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">Intelligence</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-0 top-0 w-[511px]" data-name="Container">
      <Container10 />
      <Text5 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[37.5px] left-0 top-[44px] w-[511px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[37.5px] left-0 not-italic text-[#101828] text-[30px] top-0 tracking-[0.3955px]">Retail Trap Insight Engine</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[78px] left-0 top-[105.5px] w-[511px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[465px]">A unified intelligence layer that detects retail traps and surfaces hidden institutional behavior using ownership, trading, and news signals.</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[177.12px] size-[16px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#155dfc] h-[48px] left-0 rounded-[16777200px] top-[223.5px] w-[217.117px]" data-name="Button">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[97px] not-italic text-[16px] text-center text-white top-[11.5px] tracking-[-0.3125px] translate-x-[-50%]">Explore Intelligence</p>
      <Icon />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.5px] tracking-[-0.1504px]">See also</p>
    </div>
  );
}

function Link() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#155dfc] text-[14px] top-[0.5px] tracking-[-0.1504px]">Pattern Detection</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#155dfc] text-[14px] top-[0.5px] tracking-[-0.1504px]">Signal Analysis</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#155dfc] text-[14px] top-[0.5px] tracking-[-0.1504px]">Real-time Alerts</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[68px] items-start relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[113px] items-start left-0 pb-0 pt-[17px] px-0 top-[295.5px] w-[511px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph3 />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="col-[1] css-3foyfs relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container11 />
      <Heading5 />
      <Paragraph2 />
      <Button />
      <Container13 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[96px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 96">
        <g id="Icon">
          <path d="M64 28H88V52" id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
          <path d="M88 28L54 62L34 42L8 68" id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="col-[2] content-stretch css-vsca90 flex h-[320px] items-center justify-center p-px relative rounded-[14px] row-[1] shrink-0" data-name="Container" style={{ backgroundImage: "linear-gradient(147.944deg, rgb(243, 244, 246) 0%, rgb(249, 250, 251) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon1 />
    </div>
  );
}

function Container16() {
  return (
    <div className="gap-[48px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[408.5px] relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return <div className="bg-[#00a63e] rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[72.734px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">Ownership</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-0 top-0 w-[511px]" data-name="Container">
      <Container17 />
      <Text6 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[37.5px] left-0 top-[44px] w-[511px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[37.5px] left-0 not-italic text-[#101828] text-[30px] top-0 tracking-[0.3955px]">Smart Money Ownership Radar</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[52px] left-0 top-[105.5px] w-[511px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[503px]">Tracks promoter, FII, DII, mutual fund, and retail shareholding shifts to reveal accumulation, distribution, and forced retail entry patterns.</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[190.55px] size-[16px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#00a63e] h-[48px] left-0 rounded-[16777200px] top-[197.5px] w-[230.547px]" data-name="Button">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[103.5px] not-italic text-[16px] text-center text-white top-[11.5px] tracking-[-0.3125px] translate-x-[-50%]">View Ownership Data</p>
      <Icon2 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.5px] tracking-[-0.1504px]">See also</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#155dfc] text-[14px] top-[0.5px] tracking-[-0.1504px]">Promoter Holdings</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#155dfc] text-[14px] top-[0.5px] tracking-[-0.1504px]">Institutional Flow</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#155dfc] text-[14px] top-[0.5px] tracking-[-0.1504px]">Retail Patterns</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[68px] items-start relative shrink-0 w-full" data-name="Container">
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[113px] items-start left-0 pb-0 pt-[17px] px-0 top-[269.5px] w-[511px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph5 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="col-[1] css-3foyfs relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container18 />
      <Heading6 />
      <Paragraph4 />
      <Button1 />
      <Container20 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[96px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 96">
        <g id="Icon">
          <path d={svgPaths.p135eca00} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
          <path d={svgPaths.p2e0deac0} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
          <path d={svgPaths.p3c69aa58} id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
          <path d={svgPaths.p18884a00} id="Vector_4" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="col-[2] content-stretch css-vsca90 flex h-[320px] items-center justify-center p-px relative rounded-[14px] row-[1] shrink-0" data-name="Container" style={{ backgroundImage: "linear-gradient(147.944deg, rgb(243, 244, 246) 0%, rgb(249, 250, 251) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon3 />
    </div>
  );
}

function Container23() {
  return (
    <div className="gap-[48px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[382.5px] relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return <div className="bg-[#9810fa] rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[65.328px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">Forensics</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-0 top-0 w-[511px]" data-name="Container">
      <Container24 />
      <Text7 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[37.5px] left-0 top-[44px] w-[511px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[37.5px] left-0 not-italic text-[#101828] text-[30px] top-0 tracking-[0.3955px]">Market Forensics Engine</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[52px] left-0 top-[105.5px] w-[511px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[463px]">Analyzes delivery percentage versus traded volume to spot fake rallies, low-conviction spikes, and operator-style moves.</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[136.52px] size-[16px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#9810fa] h-[48px] left-0 rounded-[16777200px] top-[197.5px] w-[176.523px]" data-name="Button">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[76px] not-italic text-[16px] text-center text-white top-[11.5px] tracking-[-0.3125px] translate-x-[-50%]">Run Forensics</p>
      <Icon4 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.5px] tracking-[-0.1504px]">See also</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#155dfc] text-[14px] top-[0.5px] tracking-[-0.1504px]">Delivery Analysis</p>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#155dfc] text-[14px] top-[0.5px] tracking-[-0.1504px]">Volume Metrics</p>
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#155dfc] text-[14px] top-[0.5px] tracking-[-0.1504px]">Rally Detection</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[68px] items-start relative shrink-0 w-full" data-name="Container">
      <Link6 />
      <Link7 />
      <Link8 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[113px] items-start left-0 pb-0 pt-[17px] px-0 top-[269.5px] w-[511px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph7 />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="col-[1] css-3foyfs relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container25 />
      <Heading7 />
      <Paragraph6 />
      <Button2 />
      <Container27 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[96px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 96">
        <g id="Icon">
          <path d={svgPaths.p11a9a640} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Container29() {
  return (
    <div className="col-[2] content-stretch css-vsca90 flex h-[320px] items-center justify-center p-px relative rounded-[14px] row-[1] shrink-0" data-name="Container" style={{ backgroundImage: "linear-gradient(147.944deg, rgb(243, 244, 246) 0%, rgb(249, 250, 251) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon5 />
    </div>
  );
}

function Container30() {
  return (
    <div className="gap-[48px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[382.5px] relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container31() {
  return <div className="bg-[#f54900] rounded-[16777200px] shrink-0 size-[8px]" data-name="Container" />;
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[69.313px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px]">Sentiment</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[20px] items-center left-0 top-0 w-[511px]" data-name="Container">
      <Container31 />
      <Text8 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-[37.5px] left-0 top-[44px] w-[511px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[37.5px] left-0 not-italic text-[#101828] text-[30px] top-0 tracking-[0.3955px]">{`News & Sentiment Intelligence`}</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[130px] left-0 top-[105.5px] w-[511px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[494px]">Classifies headlines into realistic positive, warning negative, and suspicious hype-positive to filter out noise. Measures hype density and speculative language to catch coordinated positive news cycles around weak stocks. Surfaces cases where news sentiment is overly positive while ownership and fundamentals remain weak.</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[170.56px] size-[16px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#f54900] h-[48px] left-0 rounded-[16777200px] top-[275.5px] w-[210.563px]" data-name="Button">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[93.5px] not-italic text-[16px] text-center text-white top-[11.5px] tracking-[-0.3125px] translate-x-[-50%]">Analyze Sentiment</p>
      <Icon6 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.5px] tracking-[-0.1504px]">See also</p>
    </div>
  );
}

function Link9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#155dfc] text-[14px] top-[0.5px] tracking-[-0.1504px]">News Classification</p>
    </div>
  );
}

function Link10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#155dfc] text-[14px] top-[0.5px] tracking-[-0.1504px]">Hype Detection</p>
    </div>
  );
}

function Link11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#155dfc] text-[14px] top-[0.5px] tracking-[-0.1504px]">Sentiment Scoring</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[68px] items-start relative shrink-0 w-full" data-name="Container">
      <Link9 />
      <Link10 />
      <Link11 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[113px] items-start left-0 pb-0 pt-[17px] px-0 top-[347.5px] w-[511px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph9 />
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="col-[1] css-3foyfs relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container32 />
      <Heading8 />
      <Paragraph8 />
      <Button3 />
      <Container34 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[96px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 96">
        <g id="Icon">
          <path d="M60 72H40" id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
          <path d="M72 56H40" id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
          <path d={svgPaths.p2ca5e100} id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
          <path d={svgPaths.p2538a900} id="Vector_4" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="col-[2] content-stretch css-vsca90 flex h-[320px] items-center justify-center p-px relative rounded-[14px] row-[1] shrink-0" data-name="Container" style={{ backgroundImage: "linear-gradient(147.944deg, rgb(243, 244, 246) 0%, rgb(249, 250, 251) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon7 />
    </div>
  );
}

function Container37() {
  return (
    <div className="gap-[48px] grid grid-cols-[repeat(2,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[460.5px] relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[160px] h-[2146px] items-start left-[80px] pb-0 pt-[16px] px-0 top-[437px] w-[1070px]" data-name="Container">
      <Container16 />
      <Container23 />
      <Container30 />
      <Container37 />
    </div>
  );
}

function ModularProducts() {
  return (
    <div className="absolute bg-[#f9fafb] h-[2583px] left-0 top-[918.5px] w-[1230px]" data-name="ModularProducts">
      <Container9 />
      <Container38 />
    </div>
  );
}

function ImageGlobalMap() {
  return <div className="absolute h-[24px] left-[1476px] opacity-40 top-[355.25px] w-[2214px]" data-name="Image (Global map)" />;
}

function Container39() {
  return (
    <div className="absolute h-[734.5px] left-0 opacity-40 top-0 w-[3690px]" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[20.42%] left-0 max-w-none top-0 w-[4.07%]" src={imgContainer} />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[734.5px] left-[-1230px] overflow-clip rounded-[16px] top-0 w-[3690px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 3690 734.5\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -376.24 -376.24 0 0 0)\\\'><stop stop-color=\\\'rgba(10,15,20,0.95)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.5\\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 3690 734.5\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -264.9 -264.9 0 1107 146.9)\\\'><stop stop-color=\\\'rgba(8,12,15,0.95)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.35\\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 3690 734.5\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -376.24 -376.24 0 0 734.5)\\\'><stop stop-color=\\\'rgba(42,107,120,0.6)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(21,54,60,0.3)\\\' offset=\\\'0.225\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.45\\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 3690 734.5\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -188.12 -188.12 0 1845 367.25)\\\'><stop stop-color=\\\'rgba(20,50,60,0.8)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(10,25,30,0.4)\\\' offset=\\\'0.3\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.6\\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 3690 734.5\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -370.82 -370.82 0 3690 367.25)\\\'><stop stop-color=\\\'rgba(30,70,80,0.7)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(15,35,40,0.35)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.5\\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 3690 734.5\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -304.2 -304.2 0 2952 734.5)\\\'><stop stop-color=\\\'rgba(58,138,150,0.5)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(29,69,75,0.25)\\\' offset=\\\'0.2\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.4\\\'/></radialGradient></defs></svg>'), linear-gradient(rgb(10, 15, 20) 0%, rgb(15, 26, 31) 15%, rgb(26, 56, 68) 40%, rgb(38, 84, 94) 60%, rgb(42, 107, 120) 100%)" }}>
      <ImageGlobalMap />
      <Container39 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[175.43px]" data-name="Text">
      <p className="css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#00d3f2] text-[14px] tracking-[0.5496px] uppercase">Market Intelligence</p>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[60px] left-0 not-italic text-[48px] text-white top-[0.5px] tracking-[0.3516px] w-[441px]">Built to reveal what price never explains</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[29.25px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[29.25px] left-0 not-italic text-[18px] text-white top-[0.5px] tracking-[-0.4395px]">Price shows movement.</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[29.25px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[#d1d5dc] text-[18px] top-[0.5px] tracking-[-0.4395px]">{`It doesn't show accumulation, distribution, or silent exits.`}</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[87.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[#d1d5dc] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[485px]">Our platform brings together ownership data, market activity forensics, and AI-interpreted sentiment to expose the forces driving price—before narratives catch up.</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[178.25px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph10 />
      <Paragraph11 />
      <Paragraph12 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[322.25px] items-start left-0 top-[56px] w-[512px]" data-name="Container">
      <Heading9 />
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[36px] text-white top-[0.5px] tracking-[0.3691px]">500M+</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[19.25px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[19.25px] left-0 not-italic text-[#99a1af] text-[14px] top-0 tracking-[-0.1504px]">API requests per day</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="col-[1] content-stretch css-vsca90 flex flex-col gap-[8px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[36px] text-white top-[0.5px] tracking-[0.3691px]">99.999%</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[19.25px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[19.25px] left-0 not-italic text-[#99a1af] text-[14px] top-0 tracking-[-0.1504px]">Historical uptime</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="col-[2] content-stretch css-vsca90 flex flex-col gap-[8px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container46 />
      <Container47 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[36px] text-white top-[0.5px] tracking-[0.3691px]">47+</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[19.25px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[19.25px] left-0 not-italic text-[#99a1af] text-[14px] top-0 tracking-[-0.1504px]">Countries supported</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="col-[3] content-stretch css-vsca90 flex flex-col gap-[8px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container49 />
      <Container50 />
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[36px] text-white top-[0.5px] tracking-[0.3691px]">135+</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[19.25px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[19.25px] left-0 not-italic text-[#99a1af] text-[14px] top-0 tracking-[-0.1504px]">Currencies and payment methods</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="col-[4] content-stretch css-vsca90 flex flex-col gap-[8px] items-start relative row-[1] self-stretch shrink-0" data-name="Container">
      <Container52 />
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute gap-[32px] grid grid-cols-[repeat(4,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[100.25px] left-0 pb-0 pt-[33px] px-0 top-[442.25px] w-[1070px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(16,78,100,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <Container45 />
      <Container48 />
      <Container51 />
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute h-[542.5px] left-[80px] top-[96px] w-[1070px]" data-name="Container">
      <Text9 />
      <Container42 />
      <Container55 />
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[734.5px] relative shrink-0 w-full" data-name="Container">
      <Container40 />
      <Container56 />
    </div>
  );
}

function GlobalStats() {
  return (
    <div className="absolute content-stretch flex flex-col h-[736.5px] items-start left-0 px-0 py-px top-[3597.5px] w-[1230px]" data-name="GlobalStats" style={{ backgroundImage: "linear-gradient(149.088deg, rgb(239, 246, 255) 0%, rgb(238, 242, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border-[#dbeafe] border-b border-solid border-t inset-0 pointer-events-none" />
      <Container57 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-0 not-italic text-[#101828] text-[48px] top-[0.5px] tracking-[0.3516px]">Support for any business type</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#4a5565] text-[20px] top-0 tracking-[-0.4492px]">Industry-leading solutions for every sector.</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[92px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading10 />
      <Paragraph13 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[33px] size-[32px] top-[33px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.pfc70a80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M26.6667 2.66667V8" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M29.3333 5.33333H24" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.pecb2400} id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading11() {
  return (
    <div className="absolute h-[28px] left-[33px] top-[81px] w-[274px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px]">AI</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="absolute h-[52px] left-[33px] top-[121px] w-[274px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[265px]">Power usage-based billing and scale AI products globally.</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[91.82px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link12() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[107.82px]" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#155dfc] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Learn more</p>
      <Icon9 />
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-[#f9fafb] h-[28px] relative rounded-[8px] shrink-0 w-[66.68px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#4a5565] text-[12px] top-[7px]">OpenAI</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-[#f9fafb] h-[28px] relative rounded-[8px] shrink-0 w-[80.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#4a5565] text-[12px] top-[7px]">Anthropic</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-[#f9fafb] h-[28px] relative rounded-[8px] shrink-0 w-[88.398px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#4a5565] text-[12px] top-[7px]">Midjourney</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[45px] items-start left-0 pb-0 pt-[17px] px-0 top-[40px] w-[274px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Container59 />
      <Container60 />
      <Container61 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute h-[85px] left-[33px] top-[197px] w-[274px]" data-name="Container">
      <Link12 />
      <Container62 />
    </div>
  );
}

function Container64() {
  return (
    <div className="bg-white h-[315px] relative rounded-[14px] shrink-0 w-[340px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon8 />
        <Heading11 />
        <Paragraph14 />
        <Container63 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[33px] size-[32px] top-[33px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p7b98a00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading12() {
  return (
    <div className="absolute h-[28px] left-[33px] top-[81px] w-[274px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px]">SaaS</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[52px] left-[33px] top-[121px] w-[274px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[223px]">Launch and scale subscription businesses with flexible billing.</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[91.82px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link13() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[107.82px]" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#155dfc] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Learn more</p>
      <Icon11 />
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-[#f9fafb] h-[28px] relative rounded-[8px] shrink-0 w-[55.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#4a5565] text-[12px] top-[7px]">Slack</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="bg-[#f9fafb] h-[28px] relative rounded-[8px] shrink-0 w-[62.289px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#4a5565] text-[12px] top-[7px]">Notion</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="bg-[#f9fafb] h-[28px] relative rounded-[8px] shrink-0 w-[59.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#4a5565] text-[12px] top-[7px]">Asana</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[45px] items-start left-0 pb-0 pt-[17px] px-0 top-[40px] w-[274px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Container65 />
      <Container66 />
      <Container67 />
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute h-[85px] left-[33px] top-[197px] w-[274px]" data-name="Container">
      <Link13 />
      <Container68 />
    </div>
  );
}

function Container70() {
  return (
    <div className="bg-white h-[315px] relative rounded-[14px] shrink-0 w-[340px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon10 />
        <Heading12 />
        <Paragraph15 />
        <Container69 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[33px] size-[32px] top-[33px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p2016e800} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M4.13737 8.04557H27.8627" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p242e7e00} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading13() {
  return (
    <div className="absolute h-[28px] left-[33px] top-[81px] w-[274px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px]">Marketplace</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[52px] left-[33px] top-[121px] w-[274px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[232px]">Connect buyers and sellers with integrated payment flows.</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[91.82px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link14() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[107.82px]" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#155dfc] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Learn more</p>
      <Icon13 />
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-[#f9fafb] h-[28px] relative rounded-[8px] shrink-0 w-[81.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#4a5565] text-[12px] top-[7px]">DoorDash</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-[#f9fafb] h-[28px] relative rounded-[8px] shrink-0 w-[75.406px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#4a5565] text-[12px] top-[7px]">Instacart</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-[#f9fafb] h-[28px] relative rounded-[8px] shrink-0 w-[52.219px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#4a5565] text-[12px] top-[7px]">Uber</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[45px] items-start left-0 pb-0 pt-[17px] px-0 top-[40px] w-[274px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Container71 />
      <Container72 />
      <Container73 />
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute h-[85px] left-[33px] top-[197px] w-[274px]" data-name="Container">
      <Link14 />
      <Container74 />
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-white h-[315px] relative rounded-[14px] shrink-0 w-[340px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon12 />
        <Heading13 />
        <Paragraph16 />
        <Container75 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[33px] size-[32px] top-[33px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p3fe0f680} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.pe889b80} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M10.6667 16H21.3333" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading14() {
  return (
    <div className="absolute h-[28px] left-[33px] top-[81px] w-[274px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px]">Embedded finance</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="absolute h-[52px] left-[33px] top-[121px] w-[274px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[270px]">Embed financial services directly into your platform.</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[91.82px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link15() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[107.82px]" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#155dfc] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Learn more</p>
      <Icon15 />
    </div>
  );
}

function Container77() {
  return (
    <div className="bg-[#f9fafb] h-[28px] relative rounded-[8px] shrink-0 w-[68.102px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#4a5565] text-[12px] top-[7px]">Shopify</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="bg-[#f9fafb] h-[28px] relative rounded-[8px] shrink-0 w-[55.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#4a5565] text-[12px] top-[7px]">Toast</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="bg-[#f9fafb] h-[28px] relative rounded-[8px] shrink-0 w-[88.586px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#4a5565] text-[12px] top-[7px]">Lightspeed</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[45px] items-start left-0 pb-0 pt-[17px] px-0 top-[40px] w-[274px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Container77 />
      <Container78 />
      <Container79 />
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute h-[85px] left-[33px] top-[197px] w-[274px]" data-name="Container">
      <Link15 />
      <Container80 />
    </div>
  );
}

function Container82() {
  return (
    <div className="bg-white h-[315px] relative rounded-[14px] shrink-0 w-[340px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon14 />
        <Heading14 />
        <Paragraph17 />
        <Container81 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-[33px] size-[32px] top-[33px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p236ccf00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p15dd0600} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p17474180} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading15() {
  return (
    <div className="absolute h-[28px] left-[33px] top-[81px] w-[274px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px]">E-commerce</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="absolute h-[52px] left-[33px] top-[121px] w-[274px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[224px]">Accept payments and optimize conversion for online stores.</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[91.82px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link16() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[107.82px]" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#155dfc] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Learn more</p>
      <Icon17 />
    </div>
  );
}

function Container83() {
  return (
    <div className="bg-[#f9fafb] h-[28px] relative rounded-[8px] shrink-0 w-[57.234px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#4a5565] text-[12px] top-[7px]">ASOS</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="bg-[#f9fafb] h-[28px] relative rounded-[8px] shrink-0 w-[67.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#4a5565] text-[12px] top-[7px]">Wayfair</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="bg-[#f9fafb] h-[28px] relative rounded-[8px] shrink-0 w-[71.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#4a5565] text-[12px] top-[7px]">Glossier</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[45px] items-start left-0 pb-0 pt-[17px] px-0 top-[40px] w-[274px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Container83 />
      <Container84 />
      <Container85 />
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute h-[85px] left-[33px] top-[197px] w-[274px]" data-name="Container">
      <Link16 />
      <Container86 />
    </div>
  );
}

function Container88() {
  return (
    <div className="bg-white h-[315px] relative rounded-[14px] shrink-0 w-[340px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon16 />
        <Heading15 />
        <Paragraph18 />
        <Container87 />
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-[33px] size-[32px] top-[33px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p39c94280} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2c559e60} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M9.33333 8H10.6667V13.3333" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p3191e5c0} id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading16() {
  return (
    <div className="absolute h-[28px] left-[33px] top-[81px] w-[274px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px]">Crypto</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="absolute h-[52px] left-[33px] top-[121px] w-[274px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[248px]">Build compliant crypto on and off-ramps with fiat support.</p>
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-[91.82px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link17() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[107.82px]" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#155dfc] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Learn more</p>
      <Icon19 />
    </div>
  );
}

function Container89() {
  return (
    <div className="bg-[#f9fafb] h-[28px] relative rounded-[8px] shrink-0 w-[77.914px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#4a5565] text-[12px] top-[7px]">Coinbase</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="bg-[#f9fafb] h-[28px] relative rounded-[8px] shrink-0 w-[47.031px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#4a5565] text-[12px] top-[7px]">FTX</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="bg-[#f9fafb] h-[28px] relative rounded-[8px] shrink-0 w-[64.211px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#4a5565] text-[12px] top-[7px]">Kraken</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[45px] items-start left-0 pb-0 pt-[17px] px-0 top-[40px] w-[274px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Container89 />
      <Container90 />
      <Container91 />
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute h-[85px] left-[33px] top-[197px] w-[274px]" data-name="Container">
      <Link17 />
      <Container92 />
    </div>
  );
}

function Container94() {
  return (
    <div className="bg-white h-[315px] relative rounded-[14px] shrink-0 w-[340px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon18 />
        <Heading16 />
        <Paragraph19 />
        <Container93 />
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-[33px] size-[32px] top-[33px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p27a3200} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p3c1b880} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p16bbf900} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2ee517c0} id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading17() {
  return (
    <div className="absolute h-[28px] left-[33px] top-[81px] w-[274px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px]">Creator economy</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute h-[52px] left-[33px] top-[121px] w-[274px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[260px]">Help creators monetize content and build communities.</p>
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-[91.82px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link18() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[107.82px]" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#155dfc] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Learn more</p>
      <Icon21 />
    </div>
  );
}

function Container95() {
  return (
    <div className="bg-[#f9fafb] h-[28px] relative rounded-[8px] shrink-0 w-[68.852px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#4a5565] text-[12px] top-[7px]">Patreon</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="bg-[#f9fafb] h-[28px] relative rounded-[8px] shrink-0 w-[77.805px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#4a5565] text-[12px] top-[7px]">Substack</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="bg-[#f9fafb] h-[28px] relative rounded-[8px] shrink-0 w-[68.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#4a5565] text-[12px] top-[7px]">Discord</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[45px] items-start left-0 pb-0 pt-[17px] px-0 top-[40px] w-[274px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Container95 />
      <Container96 />
      <Container97 />
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute h-[85px] left-[33px] top-[197px] w-[274px]" data-name="Container">
      <Link18 />
      <Container98 />
    </div>
  );
}

function Container100() {
  return (
    <div className="bg-white h-[315px] relative rounded-[14px] shrink-0 w-[340px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon20 />
        <Heading17 />
        <Paragraph20 />
        <Container99 />
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex gap-[24px] h-[331px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container64 />
      <Container70 />
      <Container76 />
      <Container82 />
      <Container88 />
      <Container94 />
      <Container100 />
    </div>
  );
}

function IndustryUseCases() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] h-[679px] items-start left-0 pb-0 pt-[96px] px-[80px] top-[4334px] w-[1230px]" data-name="IndustryUseCases">
      <Container58 />
      <Container101 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-0 not-italic text-[#101828] text-[48px] top-[0.5px] tracking-[0.3516px]">Enterprise reinvention</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#4a5565] text-[20px] top-0 tracking-[-0.4492px]">Bring agility to your enterprise with our global infrastructure.</p>
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[92px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading18 />
      <Paragraph21 />
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute h-[32px] left-[33px] top-[33px] w-[183.5px]" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#101828] text-[24px] top-0 tracking-[0.0703px]">BMW</p>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[36px] min-h-px min-w-px not-italic relative text-[#155dfc] text-[30px] tracking-[0.3955px]">Millions</p>
    </div>
  );
}

function Container105() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">BMW owners</p>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container104 />
      <Container105 />
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[36px] min-h-px min-w-px not-italic relative text-[#155dfc] text-[30px] tracking-[0.3955px]">+15%</p>
    </div>
  );
}

function Container108() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">increase in digital payments</p>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container107 />
      <Container108 />
    </div>
  );
}

function Container110() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[128px] items-start left-[33px] top-[97px] w-[183.5px]" data-name="Container">
      <Container106 />
      <Container109 />
    </div>
  );
}

function Container111() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px tracking-[0.3px] uppercase">Products used</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute bg-[#eff6ff] h-[24px] left-0 rounded-[16777200px] top-0 w-[80.586px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#1447e6] text-[12px] top-[5px]">Payments</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute bg-[#eff6ff] h-[24px] left-[88.59px] rounded-[16777200px] top-0 w-[72.711px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#1447e6] text-[12px] top-[5px]">Connect</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute bg-[#eff6ff] h-[24px] left-0 rounded-[16777200px] top-[32px] w-[59.328px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#1447e6] text-[12px] top-[5px]">Billing</p>
    </div>
  );
}

function Container112() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <Text10 />
      <Text11 />
      <Text12 />
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[84px] items-start left-[33px] top-[257px] w-[183.5px]" data-name="Container">
      <Container111 />
      <Container112 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[91px] left-[33px] top-[365px] w-[183.5px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-px tracking-[-0.1504px] w-[150px]">BMW digitized their payment infrastructure across 47 markets with Stripe.</p>
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-[87.62px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link19() {
  return (
    <div className="absolute h-[24px] left-[33px] top-[472px] w-[103.617px]" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#155dfc] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Read story</p>
      <Icon22 />
    </div>
  );
}

function Container114() {
  return (
    <div className="bg-white col-[1] css-3foyfs relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container103 />
      <Container110 />
      <Container113 />
      <Paragraph22 />
      <Link19 />
    </div>
  );
}

function Container115() {
  return (
    <div className="absolute h-[32px] left-[33px] top-[33px] w-[183.5px]" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#101828] text-[24px] top-0 tracking-[0.0703px]">AMAZON</p>
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[36px] min-h-px min-w-px not-italic relative text-[#155dfc] text-[30px] tracking-[0.3955px]">300K+</p>
    </div>
  );
}

function Container117() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">businesses</p>
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container116 />
      <Container117 />
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[36px] min-h-px min-w-px not-italic relative text-[#155dfc] text-[30px] tracking-[0.3955px]">50+</p>
    </div>
  );
}

function Container120() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">countries</p>
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container119 />
      <Container120 />
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[128px] items-start left-[33px] top-[97px] w-[183.5px]" data-name="Container">
      <Container118 />
      <Container121 />
    </div>
  );
}

function Container123() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px tracking-[0.3px] uppercase">Products used</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute bg-[#eff6ff] h-[24px] left-0 rounded-[16777200px] top-0 w-[80.586px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#1447e6] text-[12px] top-[5px]">Payments</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute bg-[#eff6ff] h-[24px] left-[88.59px] rounded-[16777200px] top-0 w-[72.711px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#1447e6] text-[12px] top-[5px]">Connect</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute bg-[#eff6ff] h-[24px] left-0 rounded-[16777200px] top-[32px] w-[74.5px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#1447e6] text-[12px] top-[5px]">Treasury</p>
    </div>
  );
}

function Container124() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <Text13 />
      <Text14 />
      <Text15 />
    </div>
  );
}

function Container125() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[84px] items-start left-[33px] top-[257px] w-[183.5px]" data-name="Container">
      <Container123 />
      <Container124 />
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[68.25px] left-[33px] top-[365px] w-[183.5px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-px tracking-[-0.1504px] w-[182px]">Amazon Business powers B2B payments and invoicing with Stripe.</p>
    </div>
  );
}

function Icon23() {
  return (
    <div className="absolute left-[87.62px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link20() {
  return (
    <div className="absolute h-[24px] left-[33px] top-[449.25px] w-[103.617px]" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#155dfc] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Read story</p>
      <Icon23 />
    </div>
  );
}

function Container126() {
  return (
    <div className="bg-white col-[2] css-3foyfs relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container115 />
      <Container122 />
      <Container125 />
      <Paragraph23 />
      <Link20 />
    </div>
  );
}

function Container127() {
  return (
    <div className="absolute h-[32px] left-[33px] top-[33px] w-[183.5px]" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#101828] text-[24px] top-0 tracking-[0.0703px]">MAERSK</p>
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[36px] min-h-px min-w-px not-italic relative text-[#155dfc] text-[30px] tracking-[0.3955px]">$61B</p>
    </div>
  );
}

function Container129() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">in revenue</p>
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container128 />
      <Container129 />
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[36px] min-h-px min-w-px not-italic relative text-[#155dfc] text-[30px] tracking-[0.3955px]">130+</p>
    </div>
  );
}

function Container132() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">countries</p>
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container131 />
      <Container132 />
    </div>
  );
}

function Container134() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[128px] items-start left-[33px] top-[97px] w-[183.5px]" data-name="Container">
      <Container130 />
      <Container133 />
    </div>
  );
}

function Container135() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px tracking-[0.3px] uppercase">Products used</p>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute bg-[#eff6ff] h-[24px] left-0 rounded-[16777200px] top-0 w-[80.586px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#1447e6] text-[12px] top-[5px]">Payments</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute bg-[#eff6ff] h-[24px] left-[88.59px] rounded-[16777200px] top-0 w-[59.328px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#1447e6] text-[12px] top-[5px]">Billing</p>
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute bg-[#eff6ff] h-[24px] left-0 rounded-[16777200px] top-[32px] w-[75.719px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#1447e6] text-[12px] top-[5px]">Invoicing</p>
    </div>
  );
}

function Container136() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <Text16 />
      <Text17 />
      <Text18 />
    </div>
  );
}

function Container137() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[84px] items-start left-[33px] top-[257px] w-[183.5px]" data-name="Container">
      <Container135 />
      <Container136 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="absolute h-[68.25px] left-[33px] top-[365px] w-[183.5px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-px tracking-[-0.1504px] w-[171px]">Maersk modernized global shipping payments with Stripe infrastructure.</p>
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute left-[87.62px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link21() {
  return (
    <div className="absolute h-[24px] left-[33px] top-[449.25px] w-[103.617px]" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#155dfc] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Read story</p>
      <Icon24 />
    </div>
  );
}

function Container138() {
  return (
    <div className="bg-white col-[3] css-3foyfs relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container127 />
      <Container134 />
      <Container137 />
      <Paragraph24 />
      <Link21 />
    </div>
  );
}

function Container139() {
  return (
    <div className="absolute h-[32px] left-[33px] top-[33px] w-[183.5px]" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#101828] text-[24px] top-0 tracking-[0.0703px]">TWILIO</p>
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[36px] min-h-px min-w-px not-italic relative text-[#155dfc] text-[30px] tracking-[0.3955px]">+5.5%</p>
    </div>
  );
}

function Container141() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">revenue uplift</p>
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container140 />
      <Container141 />
    </div>
  );
}

function Container143() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="css-4hzbpn flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[36px] min-h-px min-w-px not-italic relative text-[#155dfc] text-[30px] tracking-[0.3955px]">190+</p>
    </div>
  );
}

function Container144() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] tracking-[-0.1504px]">countries</p>
    </div>
  );
}

function Container145() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container143 />
      <Container144 />
    </div>
  );
}

function Container146() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[128px] items-start left-[33px] top-[97px] w-[183.5px]" data-name="Container">
      <Container142 />
      <Container145 />
    </div>
  );
}

function Container147() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px tracking-[0.3px] uppercase">Products used</p>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute bg-[#eff6ff] h-[24px] left-0 rounded-[16777200px] top-0 w-[59.328px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#1447e6] text-[12px] top-[5px]">Billing</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute bg-[#eff6ff] h-[24px] left-0 rounded-[16777200px] top-[32px] w-[145.313px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#1447e6] text-[12px] top-[5px]">Revenue Recognition</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute bg-[#eff6ff] h-[24px] left-0 rounded-[16777200px] top-[64px] w-[43.813px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[#1447e6] text-[12px] top-[5px]">Tax</p>
    </div>
  );
}

function Container148() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="Container">
      <Text19 />
      <Text20 />
      <Text21 />
    </div>
  );
}

function Container149() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[116px] items-start left-[33px] top-[257px] w-[183.5px]" data-name="Container">
      <Container147 />
      <Container148 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute h-[68.25px] left-[33px] top-[397px] w-[183.5px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-px tracking-[-0.1504px] w-[153px]">Twilio automated global billing and revenue operations at scale.</p>
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute left-[87.62px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link22() {
  return (
    <div className="absolute h-[24px] left-[33px] top-[481.25px] w-[103.617px]" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#155dfc] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Read story</p>
      <Icon25 />
    </div>
  );
}

function Container150() {
  return (
    <div className="bg-white col-[4] css-3foyfs relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container139 />
      <Container146 />
      <Container149 />
      <Paragraph25 />
      <Link22 />
    </div>
  );
}

function Container151() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(4,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[538.25px] relative shrink-0 w-full" data-name="Container">
      <Container114 />
      <Container126 />
      <Container138 />
      <Container150 />
    </div>
  );
}

function EnterpriseStories() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex flex-col gap-[64px] h-[886.25px] items-start left-0 pb-0 pt-[96px] px-[80px] top-[5013px] w-[1230px]" data-name="EnterpriseStories">
      <Container102 />
      <Container151 />
    </div>
  );
}

function Heading19() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-0 not-italic text-[#101828] text-[48px] top-[0.5px] tracking-[0.3516px]">Built for growth</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#4a5565] text-[20px] top-0 tracking-[-0.4492px]">Take your start-up further, faster with tools designed to scale.</p>
    </div>
  );
}

function Container152() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[92px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading19 />
      <Paragraph26 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="absolute left-[25px] size-[32px] top-[25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1dee4500} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p3e93a2e0} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M2.66667 16H29.3333" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading20() {
  return (
    <div className="absolute h-[28px] left-[25px] top-[73px] w-[199.5px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px]">Atlas</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute h-[68.25px] left-[25px] top-[113px] w-[199.5px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-px tracking-[-0.1504px] w-[198px]">Incorporate your company and access powerful tools to help run your business.</p>
    </div>
  );
}

function Icon27() {
  return (
    <div className="absolute left-[91.82px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link23() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[197.25px] w-[107.82px]" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#155dfc] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Learn more</p>
      <Icon27 />
    </div>
  );
}

function Container153() {
  return (
    <div className="col-[1] css-3foyfs relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135.376deg, rgb(255, 255, 255) 0%, rgb(249, 250, 251) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon26 />
      <Heading20 />
      <Paragraph27 />
      <Link23 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="absolute left-[25px] size-[32px] top-[25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p30f65280} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M2.66667 13.3333H29.3333" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading21() {
  return (
    <div className="absolute h-[28px] left-[25px] top-[73px] w-[199.5px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px]">Checkout</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="absolute h-[45.5px] left-[25px] top-[113px] w-[199.5px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-px tracking-[-0.1504px] w-[200px]">Pre-built, hosted payment page optimized for conversion.</p>
    </div>
  );
}

function Icon29() {
  return (
    <div className="absolute left-[91.82px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link24() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[174.5px] w-[107.82px]" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#155dfc] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Learn more</p>
      <Icon29 />
    </div>
  );
}

function Container154() {
  return (
    <div className="col-[2] css-3foyfs relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135.376deg, rgb(255, 255, 255) 0%, rgb(249, 250, 251) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon28 />
      <Heading21 />
      <Paragraph28 />
      <Link24 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="absolute left-[25px] size-[32px] top-[25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p3fe0f680} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.pe889b80} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M10.6667 16H21.3333" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading22() {
  return (
    <div className="absolute h-[28px] left-[25px] top-[73px] w-[199.5px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px]">Payment Links</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="absolute h-[45.5px] left-[25px] top-[113px] w-[199.5px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-px tracking-[-0.1504px] w-[197px]">Create a payment page in just a few clicks and share the link.</p>
    </div>
  );
}

function Icon31() {
  return (
    <div className="absolute left-[91.82px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link25() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[174.5px] w-[107.82px]" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#155dfc] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Learn more</p>
      <Icon31 />
    </div>
  );
}

function Container155() {
  return (
    <div className="col-[3] css-3foyfs relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135.376deg, rgb(255, 255, 255) 0%, rgb(249, 250, 251) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon30 />
      <Heading22 />
      <Paragraph29 />
      <Link25 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="absolute left-[25px] size-[32px] top-[25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p8271400} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M4 4V10.6667H10.6667" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading23() {
  return (
    <div className="absolute h-[28px] left-[25px] top-[73px] w-[199.5px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px]">Billing</p>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="absolute h-[68.25px] left-[25px] top-[113px] w-[199.5px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-px tracking-[-0.1504px] w-[193px]">Build and scale your recurring business with subscriptions and invoicing.</p>
    </div>
  );
}

function Icon33() {
  return (
    <div className="absolute left-[91.82px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link26() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[197.25px] w-[107.82px]" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#155dfc] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Learn more</p>
      <Icon33 />
    </div>
  );
}

function Container156() {
  return (
    <div className="col-[4] css-3foyfs relative rounded-[14px] row-[1] self-stretch shrink-0" data-name="Container" style={{ backgroundImage: "linear-gradient(135.376deg, rgb(255, 255, 255) 0%, rgb(249, 250, 251) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon32 />
      <Heading23 />
      <Paragraph30 />
      <Link26 />
    </div>
  );
}

function Container157() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(4,_minmax(0,_1fr))] grid-rows-[repeat(1,_minmax(0,_1fr))] h-[246.25px] relative shrink-0 w-full" data-name="Container">
      <Container153 />
      <Container154 />
      <Container155 />
      <Container156 />
    </div>
  );
}

function StartupSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] h-[594.25px] items-start left-0 pb-0 pt-[96px] px-[80px] top-[5899.25px] w-[1230px]" data-name="StartupSection">
      <Container152 />
      <Container157 />
    </div>
  );
}

function Heading24() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-0 not-italic text-[48px] text-white top-[0.5px] tracking-[0.3516px]">Designed for developers</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#dbeafe] text-[20px] top-0 tracking-[-0.4492px]">Ship faster with powerful and easy-to-use APIs.</p>
    </div>
  );
}

function Container158() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[92px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading24 />
      <Paragraph31 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="absolute left-[32px] size-[32px] top-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p101a6580} id="Vector" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p76546be} id="Vector_2" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M13.3333 12H10.6667" id="Vector_3" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M21.3333 17.3333H10.6667" id="Vector_4" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M21.3333 22.6667H10.6667" id="Vector_5" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading25() {
  return (
    <div className="absolute h-[28px] left-[32px] top-[80px] w-[274.664px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[20px] text-white top-0 tracking-[-0.4492px]">Read the docs</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute h-[45.5px] left-[32px] top-[120px] w-[274.664px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#dbeafe] text-[14px] top-px tracking-[-0.1504px] w-[230px]">Explore our guides and examples to integrate Stripe.</p>
    </div>
  );
}

function Icon35() {
  return (
    <div className="absolute left-[63.48px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link27() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[181.5px] w-[79.477px]" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#51a2ff] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Explore</p>
      <Icon35 />
    </div>
  );
}

function Container159() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid h-[239.5px] left-0 rounded-[14px] top-0 w-[340.664px]" data-name="Container">
      <Icon34 />
      <Heading25 />
      <Paragraph32 />
      <Link27 />
    </div>
  );
}

function Icon36() {
  return (
    <div className="absolute left-[32px] size-[32px] top-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p263d100} id="Vector" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p21315c00} id="Vector_2" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading26() {
  return (
    <div className="absolute h-[28px] left-[32px] top-[80px] w-[274.664px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[20px] text-white top-0 tracking-[-0.4492px]">See libraries</p>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="absolute h-[45.5px] left-[32px] top-[120px] w-[274.664px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#dbeafe] text-[14px] top-px tracking-[-0.1504px] w-[259px]">Use our official libraries for your favorite languages.</p>
    </div>
  );
}

function Icon37() {
  return (
    <div className="absolute left-[63.48px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link28() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[181.5px] w-[79.477px]" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#51a2ff] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Explore</p>
      <Icon37 />
    </div>
  );
}

function Container160() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid h-[239.5px] left-[364.66px] rounded-[14px] top-0 w-[340.664px]" data-name="Container">
      <Icon36 />
      <Heading26 />
      <Paragraph33 />
      <Link28 />
    </div>
  );
}

function Icon38() {
  return (
    <div className="absolute left-[32px] size-[32px] top-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.pbbd9800} id="Vector" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M26.6667 2.66667V8" id="Vector_2" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M29.3333 5.33333H24" id="Vector_3" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.pecb2400} id="Vector_4" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading27() {
  return (
    <div className="absolute h-[28px] left-[32px] top-[80px] w-[274.664px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[20px] text-white top-0 tracking-[-0.4492px]">Build AI agents</p>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="absolute h-[45.5px] left-[32px] top-[120px] w-[274.664px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#dbeafe] text-[14px] top-px tracking-[-0.1504px] w-[262px]">Create intelligent payment flows with AI-powered tools.</p>
    </div>
  );
}

function Icon39() {
  return (
    <div className="absolute left-[63.48px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link29() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[181.5px] w-[79.477px]" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#51a2ff] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Explore</p>
      <Icon39 />
    </div>
  );
}

function Container161() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid h-[239.5px] left-[729.33px] rounded-[14px] top-0 w-[340.664px]" data-name="Container">
      <Icon38 />
      <Heading27 />
      <Paragraph34 />
      <Link29 />
    </div>
  );
}

function Icon40() {
  return (
    <div className="absolute left-[32px] size-[32px] top-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1efeac80} id="Vector" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M4 12H28" id="Vector_2" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M4 20H28" id="Vector_3" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M12 4V28" id="Vector_4" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M20 4V28" id="Vector_5" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading28() {
  return (
    <div className="absolute h-[28px] left-[32px] top-[80px] w-[274.664px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[20px] text-white top-0 tracking-[-0.4492px]">Browse App Marketplace</p>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="absolute h-[45.5px] left-[32px] top-[120px] w-[274.664px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#dbeafe] text-[14px] top-px tracking-[-0.1504px] w-[225px]">Discover pre-built integrations and extensions.</p>
    </div>
  );
}

function Icon41() {
  return (
    <div className="absolute left-[63.48px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link30() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[181.5px] w-[79.477px]" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#51a2ff] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Explore</p>
      <Icon41 />
    </div>
  );
}

function Container162() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid h-[239.5px] left-0 rounded-[14px] top-[263.5px] w-[340.664px]" data-name="Container">
      <Icon40 />
      <Heading28 />
      <Paragraph35 />
      <Link30 />
    </div>
  );
}

function Icon42() {
  return (
    <div className="absolute left-[32px] size-[32px] top-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p3c01d500} id="Vector" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.pe6b000} id="Vector_2" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M9.33333 22L16 18" id="Vector_3" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M9.33333 22V28.8933" id="Vector_4" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1f416600} id="Vector_5" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M22.6667 22L16 18" id="Vector_6" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1a599700} id="Vector_7" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M22.6667 22V28.8933" id="Vector_8" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p13850f00} id="Vector_9" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M16 10.6665L9.68001 6.86654" id="Vector_10" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M16 10.6665L22.32 6.86654" id="Vector_11" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M16 18V10.6667" id="Vector_12" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading29() {
  return (
    <div className="absolute h-[28px] left-[32px] top-[80px] w-[274.664px]" data-name="Heading 3">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[20px] text-white top-0 tracking-[-0.4492px]">Learn about Apps</p>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="absolute h-[45.5px] left-[32px] top-[120px] w-[274.664px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#dbeafe] text-[14px] top-px tracking-[-0.1504px] w-[261px]">Build custom apps and workflows on the Stripe platform.</p>
    </div>
  );
}

function Icon43() {
  return (
    <div className="absolute left-[63.48px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #51A2FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Link31() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[181.5px] w-[79.477px]" data-name="Link">
      <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#51a2ff] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Explore</p>
      <Icon43 />
    </div>
  );
}

function Container163() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] border-solid h-[239.5px] left-[364.66px] rounded-[14px] top-[263.5px] w-[340.664px]" data-name="Container">
      <Icon42 />
      <Heading29 />
      <Paragraph36 />
      <Link31 />
    </div>
  );
}

function Container164() {
  return (
    <div className="h-[503px] relative shrink-0 w-full" data-name="Container">
      <Container159 />
      <Container160 />
      <Container161 />
      <Container162 />
      <Container163 />
    </div>
  );
}

function Container165() {
  return <div className="bg-[#fb2c36] rounded-[16777200px] shrink-0 size-[12px]" data-name="Container" />;
}

function Container166() {
  return <div className="bg-[#f0b100] rounded-[16777200px] shrink-0 size-[12px]" data-name="Container" />;
}

function Container167() {
  return <div className="bg-[#00c950] rounded-[16777200px] shrink-0 size-[12px]" data-name="Container" />;
}

function Container168() {
  return (
    <div className="content-stretch flex gap-[8px] h-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container165 />
      <Container166 />
      <Container167 />
    </div>
  );
}

function Code() {
  return (
    <div className="h-[136.5px] relative shrink-0 w-full" data-name="Code">
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] top-[-1px] w-[489px]">
        <p className="css-4hzbpn mb-0">{`const stripe = require('stripe')('sk_test_...');`}</p>
        <p className="css-4hzbpn mb-0">&nbsp;</p>
        <p className="css-4hzbpn mb-0">{`const paymentIntent = await stripe.paymentIntents.create({`}</p>
        <p className="css-4hzbpn mb-0">{`  amount: 2000,`}</p>
        <p className="css-4hzbpn mb-0">{`  currency: 'inr',`}</p>
        <p className="css-4hzbpn mb-0">{`  payment_method_types: ['card'],`}</p>
        <p className="css-4hzbpn">{`});`}</p>
      </div>
    </div>
  );
}

function CodeBlock() {
  return (
    <div className="h-[140px] relative shrink-0 w-full" data-name="Code Block">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pl-0 pr-[515.133px] pt-[1.5px] relative size-full">
          <Code />
        </div>
      </div>
    </div>
  );
}

function Container169() {
  return (
    <div className="bg-[#101828] h-[234px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#1e2939] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[33px] px-[33px] relative size-full">
        <Container168 />
        <CodeBlock />
      </div>
    </div>
  );
}

function DeveloperSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] h-[1149px] items-start left-0 pb-0 pt-[96px] px-[80px] top-[6493.5px] w-[1230px]" data-name="DeveloperSection" style={{ backgroundImage: "linear-gradient(136.95deg, rgb(49, 44, 133) 0%, rgb(28, 57, 142) 100%)" }}>
      <Container158 />
      <Container164 />
      <Container169 />
    </div>
  );
}

function Heading30() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[48px] left-0 not-italic text-[#101828] text-[48px] top-[0.5px] tracking-[0.3516px]">Launch with ease</p>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#4a5565] text-[20px] top-0 tracking-[-0.4492px]">Get started quickly with low-code and no-code solutions.</p>
    </div>
  );
}

function Container170() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[92px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading30 />
      <Paragraph37 />
    </div>
  );
}

function Icon44() {
  return (
    <div className="absolute left-[32px] size-[40px] top-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p3695b180} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p7b46f00} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading31() {
  return (
    <div className="absolute h-[64px] left-[32px] top-[96px] w-[269.328px]" data-name="Heading 3">
      <p className="absolute css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#101828] text-[24px] top-0 tracking-[0.0703px] w-[231px]">Use a pre-integrated platform</p>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="absolute h-[52px] left-[32px] top-[176px] w-[269.328px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[258px]">Stripe works with popular platforms out of the box.</p>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[16px] relative shrink-0 w-[17.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-px">SQ</p>
      </div>
    </div>
  );
}

function Container171() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text22 />
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[24px] relative shrink-0 w-[96.969px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Squarespace</p>
      </div>
    </div>
  );
}

function Container172() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center relative shrink-0 w-full" data-name="Container">
      <Container171 />
      <Text23 />
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[16px] relative shrink-0 w-[15.242px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-px">LS</p>
      </div>
    </div>
  );
}

function Container173() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.008px] py-0 relative size-full">
        <Text24 />
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[24px] relative shrink-0 w-[82.992px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Lightspeed</p>
      </div>
    </div>
  );
}

function Container174() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center relative shrink-0 w-full" data-name="Container">
      <Container173 />
      <Text25 />
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20.719px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-px">WC</p>
      </div>
    </div>
  );
}

function Container175() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text26 />
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[24px] relative shrink-0 w-[114.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-0.5px] tracking-[-0.3125px]">WooCommerce</p>
      </div>
    </div>
  );
}

function Container176() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center relative shrink-0 w-full" data-name="Container">
      <Container175 />
      <Text27 />
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20.867px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-px">WX</p>
      </div>
    </div>
  );
}

function Container177() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.008px] py-0 relative size-full">
        <Text28 />
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[24px] relative shrink-0 w-[27.617px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Wix</p>
      </div>
    </div>
  );
}

function Container178() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center relative shrink-0 w-full" data-name="Container">
      <Container177 />
      <Text29 />
    </div>
  );
}

function Container179() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[196px] items-start left-[32px] top-[252px] w-[269.328px]" data-name="Container">
      <Container172 />
      <Container174 />
      <Container176 />
      <Container178 />
    </div>
  );
}

function Container180() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid h-[482px] left-0 rounded-[14px] top-0 w-[335.328px]" data-name="Container">
      <Icon44 />
      <Heading31 />
      <Paragraph38 />
      <Container179 />
    </div>
  );
}

function Icon45() {
  return (
    <div className="absolute left-[32px] size-[40px] top-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p1a96b600} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p3f0c3c00} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p376e9780} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p1517b200} id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading32() {
  return (
    <div className="absolute h-[64px] left-[32px] top-[96px] w-[269.336px]" data-name="Heading 3">
      <p className="absolute css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#101828] text-[24px] top-0 tracking-[0.0703px] w-[194px]">Build with Stripe-certified experts</p>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="absolute h-[104px] left-[32px] top-[176px] w-[269.336px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[251px]">Connect with vetted development partners who can help you build, integrate, and optimize your Stripe implementation.</p>
    </div>
  );
}

function Link32() {
  return (
    <div className="absolute content-stretch flex h-[19px] items-start left-[32px] top-[306.5px] w-[121.773px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#155dfc] text-[16px] tracking-[-0.3125px]">Find a partner →</p>
    </div>
  );
}

function Container181() {
  return (
    <div className="absolute bg-white border border-[#e5e7eb] border-solid h-[482px] left-[367.33px] rounded-[14px] top-0 w-[335.336px]" data-name="Container">
      <Icon45 />
      <Heading32 />
      <Paragraph39 />
      <Link32 />
    </div>
  );
}

function Icon46() {
  return (
    <div className="absolute left-[32px] size-[40px] top-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p36147700} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading33() {
  return (
    <div className="absolute h-[64px] left-[32px] top-[96px] w-[269.336px]" data-name="Heading 3">
      <p className="absolute css-4hzbpn font-['Inter:Bold',sans-serif] font-bold leading-[32px] left-0 not-italic text-[#101828] text-[24px] top-0 tracking-[0.0703px] w-[178px]">Try our no-code products</p>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="absolute h-[52px] left-[32px] top-[176px] w-[269.336px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#4a5565] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[245px]">Start accepting payments without writing code:</p>
    </div>
  );
}

function Container182() {
  return <div className="absolute bg-[#155dfc] left-0 rounded-[16777200px] size-[6px] top-[8px]" data-name="Container" />;
}

function Text30() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[196.938px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Invoicing and billing portals</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container182 />
      <Text30 />
    </div>
  );
}

function Container183() {
  return <div className="absolute bg-[#155dfc] left-0 rounded-[16777200px] size-[6px] top-[8px]" data-name="Container" />;
}

function Text31() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[245.695px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-0.5px] tracking-[-0.3125px]">In-person payments with Terminal</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container183 />
      <Text31 />
    </div>
  );
}

function Container184() {
  return <div className="absolute bg-[#155dfc] left-0 rounded-[16777200px] size-[6px] top-[8px]" data-name="Container" />;
}

function Text32() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[238.375px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Payment links for quick checkout</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container184 />
      <Text32 />
    </div>
  );
}

function Container185() {
  return <div className="absolute bg-[#155dfc] left-0 rounded-[16777200px] size-[6px] top-[8px]" data-name="Container" />;
}

function Text33() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[182.406px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-0.5px] tracking-[-0.3125px]">Pre-built checkout pages</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Container185 />
      <Text33 />
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[132px] items-start left-[32px] top-[252px] w-[269.336px]" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Container186() {
  return (
    <div className="absolute border border-[#dbeafe] border-solid h-[482px] left-[734.66px] rounded-[14px] top-0 w-[335.336px]" data-name="Container" style={{ backgroundImage: "linear-gradient(124.827deg, rgb(239, 246, 255) 0%, rgb(238, 242, 255) 100%)" }}>
      <Icon46 />
      <Heading33 />
      <Paragraph40 />
      <List />
    </div>
  );
}

function Container187() {
  return (
    <div className="h-[482px] relative shrink-0 w-full" data-name="Container">
      <Container180 />
      <Container181 />
      <Container186 />
    </div>
  );
}

function NoCodeSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] h-[830px] items-start left-0 pb-0 pt-[96px] px-[80px] top-[7642.5px] w-[1230px]" data-name="NoCodeSection">
      <Container170 />
      <Container187 />
    </div>
  );
}

function Heading34() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[36px] text-white top-[0.5px] tracking-[0.3691px]">Ready to get started?</p>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#dbeafe] text-[18px] top-0 tracking-[-0.4395px]">Create an account instantly and start accepting payments.</p>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#dbeafe] text-[18px] top-0 tracking-[-0.4395px]">Always know what you pay • Start your integration in minutes</p>
    </div>
  );
}

function Container188() {
  return (
    <div className="h-[120px] relative shrink-0 w-[487.734px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Heading34 />
        <Paragraph41 />
        <Paragraph42 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white h-[54px] relative rounded-[16777200px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[137.188px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[69.5px] not-italic text-[#155dfc] text-[16px] text-center top-[14.5px] tracking-[-0.3125px] translate-x-[-50%]">Start now</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#1447e6] flex-[1_0_0] h-[54px] min-h-px min-w-px relative rounded-[16777200px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#2b7fff] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[85.5px] not-italic text-[16px] text-center text-white top-[14.5px] tracking-[-0.3125px] translate-x-[-50%]">Contact sales</p>
      </div>
    </div>
  );
}

function Container189() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[322.781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Button4 />
        <Button5 />
      </div>
    </div>
  );
}

function Link33() {
  return (
    <div className="h-[20px] relative shrink-0 w-[91.102px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#dbeafe] text-[14px] top-[0.5px] tracking-[-0.1504px] underline">Pricing details</p>
      </div>
    </div>
  );
}

function Link34() {
  return (
    <div className="h-[20px] relative shrink-0 w-[87.063px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#dbeafe] text-[14px] top-[0.5px] tracking-[-0.1504px] underline">API reference</p>
      </div>
    </div>
  );
}

function Container190() {
  return (
    <div className="h-[20px] relative shrink-0 w-[322.781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center justify-center pl-0 pr-[0.008px] py-0 relative size-full">
        <Link33 />
        <Link34 />
      </div>
    </div>
  );
}

function Container191() {
  return (
    <div className="h-[90px] relative shrink-0 w-[322.781px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Container189 />
        <Container190 />
      </div>
    </div>
  );
}

function Container192() {
  return (
    <div className="content-stretch flex h-[120px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container188 />
      <Container191 />
    </div>
  );
}

function CtaBand() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch flex flex-col from-[#155dfc] h-[248px] items-start left-0 pb-0 pt-[64px] px-[80px] to-[#4f39f6] top-[8472.5px] w-[1230px]" data-name="CTABand">
      <Container192 />
    </div>
  );
}

function Container193() {
  return <div className="absolute h-[666.5px] left-0 top-0 w-[1230px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1230 666.5\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -139.9 -139.9 0 0 0)\\\'><stop stop-color=\\\'rgba(26,40,50,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(13,20,25,0.5)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.5\\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1230 666.5\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -101.27 -101.27 0 369 133.3)\\\'><stop stop-color=\\\'rgba(15,26,31,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(8,13,16,0.5)\\\' offset=\\\'0.175\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.35\\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1230 666.5\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -139.9 -139.9 0 0 666.5)\\\'><stop stop-color=\\\'rgba(111,255,208,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(83,191,156,0.75)\\\' offset=\\\'0.1125\\\'/><stop stop-color=\\\'rgba(56,128,104,0.5)\\\' offset=\\\'0.225\\\'/><stop stop-color=\\\'rgba(28,64,52,0.25)\\\' offset=\\\'0.3375\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.45\\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1230 666.5\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -69.949 -69.949 0 615 333.25)\\\'><stop stop-color=\\\'rgba(42,107,120,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(32,80,90,0.75)\\\' offset=\\\'0.15\\\'/><stop stop-color=\\\'rgba(21,54,60,0.5)\\\' offset=\\\'0.3\\\'/><stop stop-color=\\\'rgba(11,27,30,0.25)\\\' offset=\\\'0.45\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.6\\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1230 666.5\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -127.43 -127.43 0 1230 333.25)\\\'><stop stop-color=\\\'rgba(58,138,150,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(44,104,113,0.75)\\\' offset=\\\'0.125\\\'/><stop stop-color=\\\'rgba(29,69,75,0.5)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(15,35,38,0.25)\\\' offset=\\\'0.375\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.5\\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1230 666.5\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -118.85 -118.85 0 984 666.5)\\\'><stop stop-color=\\\'rgba(127,255,224,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(95,191,168,0.75)\\\' offset=\\\'0.1\\\'/><stop stop-color=\\\'rgba(64,128,112,0.5)\\\' offset=\\\'0.2\\\'/><stop stop-color=\\\'rgba(32,64,56,0.25)\\\' offset=\\\'0.3\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.4\\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1230 666.5\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -81.396 -81.396 0 615 533.2)\\\'><stop stop-color=\\\'rgba(111,255,208,0.4)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(83,191,156,0.3)\\\' offset=\\\'0.175\\\'/><stop stop-color=\\\'rgba(56,128,104,0.2)\\\' offset=\\\'0.35\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.7\\\'/></radialGradient></defs></svg>'), linear-gradient(rgb(15, 26, 31) 0%, rgb(26, 40, 50) 15%, rgb(42, 107, 120) 40%, rgb(58, 138, 150) 60%, rgb(111, 255, 208) 100%)" }} />;
}

function Container194() {
  return <div className="absolute blur-[90px] h-[666.5px] left-0 top-0 w-[1230px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1230 666.5\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -69.472 -128.21 0 253.05 449.89)\\\'><stop stop-color=\\\'rgba(15,26,31,0.8)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.25\\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1230 666.5\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -56.201 -103.72 0 660.7 233.28)\\\'><stop stop-color=\\\'rgba(42,107,120,0.5)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(21,54,60,0.25)\\\' offset=\\\'0.2\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.4\\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1230 666.5\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -80.995 -149.47 0 990.66 606.52)\\\'><stop stop-color=\\\'rgba(111,255,208,0.6)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(83,191,156,0.45)\\\' offset=\\\'0.0875\\\'/><stop stop-color=\\\'rgba(56,128,104,0.3)\\\' offset=\\\'0.175\\\'/><stop stop-color=\\\'rgba(28,64,52,0.15)\\\' offset=\\\'0.2625\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.35\\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 1230 666.5\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(0 -75.961 -140.18 0 282.56 106.64)\\\'><stop stop-color=\\\'rgba(26,40,50,0.6)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(13,20,25,0.3)\\\' offset=\\\'0.2\\\'/><stop stop-color=\\\'rgba(0,0,0,0)\\\' offset=\\\'0.4\\\'/></radialGradient></defs></svg>')" }} />;
}

function Container195() {
  return (
    <div className="absolute h-[666.5px] left-0 opacity-90 top-0 w-[1230px]" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[22.51%] left-0 max-w-none top-0 w-[12.2%]" src={imgContainer} />
      </div>
    </div>
  );
}

function GradientBackground() {
  return (
    <div className="absolute h-[666.5px] left-0 overflow-clip top-[-72px] w-[1230px]" data-name="GradientBackground">
      <Container193 />
      <Container194 />
      <Container195 />
    </div>
  );
}

function Text34() {
  return (
    <div className="absolute content-stretch flex h-[84.5px] items-start left-0 top-[2.5px] w-[659.094px]" data-name="Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[90px] not-italic relative shrink-0 text-[#f0f0f0] text-[72px] tracking-[0.123px]">Profit from patterns,</p>
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute content-stretch flex h-[84.5px] items-start left-0 top-[92.5px] w-[245.43px]" data-name="Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[90px] not-italic relative shrink-0 text-[#f0f0f0] text-[72px] tracking-[0.123px]">not the</p>
    </div>
  );
}

function Text36() {
  return (
    <div className="absolute content-stretch flex h-[84.5px] items-start left-[163.9px] top-[2.5px] w-[17.461px]" data-name="Text">
      <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[90px] not-italic relative shrink-0 text-[#101828] text-[72px] tracking-[0.123px]">.</p>
    </div>
  );
}

function Text37() {
  return (
    <div className="absolute h-[90px] left-[245.43px] top-[90px] w-[280px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[90px] left-0 not-italic text-[#101828] text-[72px] top-[1.5px] tracking-[0.123px]">hype</p>
      <Text36 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[180px] left-0 top-[48px] w-[768px]" data-name="Heading 1">
      <Text34 />
      <Text35 />
      <Text37 />
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="absolute h-[58.5px] left-0 top-[252px] w-[512px]" data-name="Paragraph">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] left-0 not-italic text-[#1e2939] text-[18px] top-[0.5px] tracking-[-0.4395px] w-[492px]">A multi-agent intelligence system that uncovers suspicious market behavior before you get caught in a pump-and-dump.</p>
    </div>
  );
}

function Icon47() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M14 14L11.1067 11.1067" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#99a1af] text-[14px] tracking-[-0.1504px]">{`Enter stock name to scan for pump & dump...`}</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#101828] h-[32px] relative rounded-[16777200px] shrink-0 w-[116.539px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[58.5px] not-italic text-[14px] text-center text-white top-[6.5px] tracking-[-0.1504px] translate-x-[-50%]">SCAN NOW</p>
      </div>
    </div>
  );
}

function Container196() {
  return (
    <div className="bg-white flex-[1_0_0] h-[60px] min-h-px min-w-px relative rounded-[16777200px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[16px] py-0 relative size-full">
          <Icon47 />
          <TextInput />
          <Button6 />
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#101828] h-[52px] relative rounded-[16777200px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[151.063px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[76.5px] not-italic text-[16px] text-center text-white top-[13.5px] tracking-[-0.3125px] translate-x-[-50%]">Contact Sales</p>
      </div>
    </div>
  );
}

function Container197() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[60px] items-center left-0 pl-0 pr-[24.938px] py-0 top-[342.5px] w-[768px]" data-name="Container">
      <Container196 />
      <Button7 />
    </div>
  );
}

function Container198() {
  return (
    <div className="absolute h-[402.5px] left-[80px] top-[96px] w-[768px]" data-name="Container">
      <Heading />
      <Paragraph43 />
      <Container197 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute h-[594.5px] left-0 top-0 w-[1230px]" data-name="HeroSection">
      <GradientBackground />
      <Container198 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="h-[8720.5px] relative shrink-0 w-full" data-name="Main Content">
      <ClientLogos />
      <ModularProducts />
      <GlobalStats />
      <IndustryUseCases />
      <EnterpriseStories />
      <StartupSection />
      <DeveloperSection />
      <NoCodeSection />
      <CtaBand />
      <HeroSection />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[0.1996px] uppercase w-[96px]">{`Products & pricing`}</p>
    </div>
  );
}

function Link35() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[63.102px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">Payments</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link35 />
    </div>
  );
}

function Link36() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[38.852px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">Billing</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link36 />
    </div>
  );
}

function Link37() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[54.633px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">Connect</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link37 />
    </div>
  );
}

function Link38() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[45.547px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">Issuing</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link38 />
    </div>
  );
}

function Link39() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[54.852px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">Terminal</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link39 />
    </div>
  );
}

function Link40() {
  return (
    <div className="absolute h-[40.5px] left-0 top-[4.5px] w-[81.266px]" data-name="Link">
      <p className="absolute css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#d1d5dc] text-[14px] top-[-1px] tracking-[-0.1504px] w-[82px]">Financial Connections</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <Link40 />
    </div>
  );
}

function Link41() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[44.625px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">Pricing</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link41 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[264px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
      <ListItem9 />
      <ListItem10 />
    </div>
  );
}

function Container199() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[320px] items-start left-0 top-0 w-[138.328px]" data-name="Container">
      <Heading3 />
      <List1 />
    </div>
  );
}

function Heading35() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[0.1996px] uppercase">Solutions</p>
    </div>
  );
}

function Link42() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[61.305px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">Start-ups</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link42 />
    </div>
  );
}

function Link43() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[73.297px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">Enterprises</p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link43 />
    </div>
  );
}

function Link44() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[32.695px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">SaaS</p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link44 />
    </div>
  );
}

function Link45() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[61.906px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">Platforms</p>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link45 />
    </div>
  );
}

function Link46() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[82.867px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">E-commerce</p>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link46 />
    </div>
  );
}

function Link47() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[86.805px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">Marketplaces</p>
    </div>
  );
}

function ListItem16() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link47 />
    </div>
  );
}

function Link48() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[43.922px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">Crypto</p>
    </div>
  );
}

function ListItem17() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link48 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[240px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem11 />
      <ListItem12 />
      <ListItem13 />
      <ListItem14 />
      <ListItem15 />
      <ListItem16 />
      <ListItem17 />
    </div>
  );
}

function Container200() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[320px] items-start left-[186.33px] top-0 w-[138.336px]" data-name="Container">
      <Heading35 />
      <List2 />
    </div>
  );
}

function Heading36() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[0.1996px] uppercase w-[123px]">{`Integrations & custom solutions`}</p>
    </div>
  );
}

function Link49() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[109.484px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">App Marketplace</p>
    </div>
  );
}

function ListItem18() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link49 />
    </div>
  );
}

function Link50() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[121.172px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">Partner Ecosystem</p>
    </div>
  );
}

function ListItem19() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link50 />
    </div>
  );
}

function Link51() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[138.039px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">Professional Services</p>
    </div>
  );
}

function ListItem20() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link51 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[96px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem18 />
      <ListItem19 />
      <ListItem20 />
    </div>
  );
}

function Container201() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[320px] items-start left-[372.66px] top-0 w-[138.328px]" data-name="Container">
      <Heading36 />
      <List3 />
    </div>
  );
}

function Heading37() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[0.1996px] uppercase">Developers</p>
    </div>
  );
}

function Link52() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[98.641px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">Documentation</p>
    </div>
  );
}

function ListItem21() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link52 />
    </div>
  );
}

function Link53() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[87.063px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">API reference</p>
    </div>
  );
}

function ListItem22() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link53 />
    </div>
  );
}

function Link54() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[65.164px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">API status</p>
    </div>
  );
}

function ListItem23() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link54 />
    </div>
  );
}

function Link55() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[92.898px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">API changelog</p>
    </div>
  );
}

function ListItem24() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link55 />
    </div>
  );
}

function Link56() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[113.961px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">Build a Stripe app</p>
    </div>
  );
}

function ListItem25() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link56 />
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem21 />
      <ListItem22 />
      <ListItem23 />
      <ListItem24 />
      <ListItem25 />
    </div>
  );
}

function Container202() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[320px] items-start left-[558.99px] top-0 w-[138.336px]" data-name="Container">
      <Heading37 />
      <List4 />
    </div>
  );
}

function Heading38() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[0.1996px] uppercase">Resources</p>
    </div>
  );
}

function Link57() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[97.156px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">Support center</p>
    </div>
  );
}

function ListItem26() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link57 />
    </div>
  );
}

function Link58() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[90.297px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">Support plans</p>
    </div>
  );
}

function ListItem27() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link58 />
    </div>
  );
}

function Link59() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[45.109px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">Guides</p>
    </div>
  );
}

function ListItem28() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link59 />
    </div>
  );
}

function Link60() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[110.383px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">Customer stories</p>
    </div>
  );
}

function ListItem29() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link60 />
    </div>
  );
}

function Link61() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[28.945px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">Blog</p>
    </div>
  );
}

function ListItem30() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link61 />
    </div>
  );
}

function Link62() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[120.75px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">Annual conference</p>
    </div>
  );
}

function ListItem31() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link62 />
    </div>
  );
}

function Link63() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[101.703px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">{`Privacy & terms`}</p>
    </div>
  );
}

function ListItem32() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link63 />
    </div>
  );
}

function List5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[240px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem26 />
      <ListItem27 />
      <ListItem28 />
      <ListItem29 />
      <ListItem30 />
      <ListItem31 />
      <ListItem32 />
    </div>
  );
}

function Container203() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[320px] items-start left-[745.33px] top-0 w-[138.336px]" data-name="Container">
      <Heading38 />
      <List5 />
    </div>
  );
}

function Heading39() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[0.1996px] uppercase">Company</p>
    </div>
  );
}

function Link64() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[81.039px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">About Stripe</p>
    </div>
  );
}

function ListItem33() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link64 />
    </div>
  );
}

function Link65() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[70.055px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">Customers</p>
    </div>
  );
}

function ListItem34() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link65 />
    </div>
  );
}

function Link66() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[66.117px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">Enterprise</p>
    </div>
  );
}

function ListItem35() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link66 />
    </div>
  );
}

function Link67() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[54.391px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">Partners</p>
    </div>
  );
}

function ListItem36() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link67 />
    </div>
  );
}

function Link68() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[31.133px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">Jobs</p>
    </div>
  );
}

function ListItem37() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link68 />
    </div>
  );
}

function Link69() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[69.008px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">Newsroom</p>
    </div>
  );
}

function ListItem38() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link69 />
    </div>
  );
}

function Link70() {
  return (
    <div className="absolute content-stretch flex h-[16.5px] items-start left-0 top-[4.5px] w-[78.016px]" data-name="Link">
      <p className="css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#d1d5dc] text-[14px] tracking-[-0.1504px]">Stripe Press</p>
    </div>
  );
}

function ListItem39() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link70 />
    </div>
  );
}

function List6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[240px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem33 />
      <ListItem34 />
      <ListItem35 />
      <ListItem36 />
      <ListItem37 />
      <ListItem38 />
      <ListItem39 />
    </div>
  );
}

function Container204() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[320px] items-start left-[931.66px] top-0 w-[138.328px]" data-name="Container">
      <Heading39 />
      <List6 />
    </div>
  );
}

function Container205() {
  return (
    <div className="h-[320px] relative shrink-0 w-full" data-name="Container">
      <Container199 />
      <Container200 />
      <Container201 />
      <Container202 />
      <Container203 />
      <Container204 />
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[20px] relative shrink-0 w-[9.305px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px]">S</p>
      </div>
    </div>
  );
}

function Container206() {
  return (
    <div className="bg-[#155dfc] relative rounded-[4px] shrink-0 size-[24px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-0 pr-[0.008px] py-0 relative size-full">
        <Text38 />
      </div>
    </div>
  );
}

function Text39() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[18px] text-white top-0 tracking-[-0.4395px]">stripe</p>
      </div>
    </div>
  );
}

function Container207() {
  return (
    <div className="h-[28px] relative shrink-0 w-[80.609px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container206 />
        <Text39 />
      </div>
    </div>
  );
}

function Icon48() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2_987)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p14d10c00} id="Vector_2" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 8H14.6667" id="Vector_3" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2_987">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text40() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[46px] not-italic text-[#d1d5dc] text-[14px] text-center top-[0.5px] tracking-[-0.1504px] translate-x-[-50%]">India (English)</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon48 />
        <Text40 />
      </div>
    </div>
  );
}

function Container208() {
  return (
    <div className="h-[28px] relative shrink-0 w-[228.289px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Container207 />
        <Button8 />
      </div>
    </div>
  );
}

function Container209() {
  return (
    <div className="h-[20px] relative shrink-0 w-[123.508px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#6a7282] text-[14px] top-[0.5px] tracking-[-0.1504px]">© 2026 Stripe, Inc.</p>
      </div>
    </div>
  );
}

function Container210() {
  return (
    <div className="content-stretch flex h-[61px] items-center justify-between pb-0 pt-px px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#1e2939] border-solid border-t inset-0 pointer-events-none" />
      <Container208 />
      <Container209 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#101828] h-[573px] relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex flex-col gap-[64px] items-start pb-0 pt-[64px] px-[80px] relative size-full">
        <Container205 />
        <Container210 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#f5f5f5] content-stretch flex flex-col h-[9293.5px] items-start left-0 top-0 w-[1230px]" data-name="App">
      <MainContent />
      <Footer />
    </div>
  );
}

function Text41() {
  return (
    <div className="h-[28px] relative shrink-0 w-[105.516px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 lowercase not-italic text-[20px] text-white top-0 tracking-[-0.4492px]">marketlens</p>
      </div>
    </div>
  );
}

function Link71() {
  return (
    <div className="h-[20px] relative shrink-0 w-[58.109px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px]">Products</p>
      </div>
    </div>
  );
}

function Link72() {
  return (
    <div className="h-[20px] relative shrink-0 w-[59.867px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px]">Solutions</p>
      </div>
    </div>
  );
}

function Link73() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px]">Developers</p>
      </div>
    </div>
  );
}

function Link74() {
  return (
    <div className="h-[20px] relative shrink-0 w-[67.648px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px]">Resources</p>
      </div>
    </div>
  );
}

function Link75() {
  return (
    <div className="h-[20px] relative shrink-0 w-[44.625px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px]">Pricing</p>
      </div>
    </div>
  );
}

function Container211() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Link71 />
        <Link72 />
        <Link73 />
        <Link74 />
        <Link75 />
      </div>
    </div>
  );
}

function Container212() {
  return (
    <div className="h-[28px] relative shrink-0 w-[584.492px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[48px] items-center relative size-full">
        <Text41 />
        <Container211 />
      </div>
    </div>
  );
}

function Text42() {
  return (
    <div className="absolute h-[16px] left-[47.59px] top-[2px] w-[5.344px]" data-name="Text">
      <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-white top-px">›</p>
    </div>
  );
}

function Link76() {
  return (
    <div className="h-[20px] relative shrink-0 w-[52.938px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px]">Sign in</p>
        <Text42 />
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-white flex-[1_0_0] h-[40px] min-h-px min-w-px relative rounded-[16777200px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[69.5px] not-italic text-[#9810fa] text-[14px] text-center top-[10.5px] tracking-[-0.1504px] translate-x-[-50%]">Contact sales</p>
      </div>
    </div>
  );
}

function Container213() {
  return (
    <div className="h-[40px] relative shrink-0 w-[215.18px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Link76 />
        <Button9 />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute content-stretch flex h-[72px] items-center justify-between left-[80px] top-0 w-[1070px]" data-name="Navigation">
      <Container212 />
      <Container213 />
    </div>
  );
}

export default function CreateFintechMarketingHomepageCopy() {
  return (
    <div className="bg-white relative size-full" data-name="Create Fintech Marketing Homepage (Copy)">
      <App />
      <Navigation />
    </div>
  );
}