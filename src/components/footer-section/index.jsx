import logo from '../../assets/logo.png'

export default function FooterSectionComponent() {

    const links = ['(주)한국감정금거래소', '대표 : 김현정', '사업자등록번호 : 543-87-02302', '대표번호 : 031-212-8249', '주소 : 경기 수원시 영통구 광교중앙로 244, 104호 (하동)']
    return (
        <div className={'w-full flex justify-center h-auto border-t border-primary_yellow bg-primary_yellow/15 py-7'}>
            <div className="container w-full flex flex-col justify-center items-center gap-3">
                <img src={logo} alt="template-logo" className={'h-9'}/>
                <div className={'flex gap-2 '}>
                    {links.map((item, index) => {
                        const isLast = links.length - 1 === index
                        return (
                            <div key={index} className={'flex items-center gap-2'}>
                                <a href="#" key={index} className={'text-sm text-primary_yellow leading-4'}>{item}</a>
                                {!isLast && <div className={'w-1 h-full border-r border-primary_yellow'}></div>}
                            </div>
                        )
                    })}
                </div>
                <span className={'text-sm text-primary_gray font-medium leading-4'}>Copyright ⓒ (주)한국감정금거래소. All rights reserved</span>
            </div>
        </div>
    );
}