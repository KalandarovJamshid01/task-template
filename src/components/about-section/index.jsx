export default function AboutSectionComponent() {

    const cards = [
        {
            title: 'Introduciton',
            img: 'src/assets/exchange/img_1.png',
            description: '업체소개'
        },
        {
            title: 'Business',
            description: '주요업무'
        },
        {
            title: 'Information',
            img: 'src/assets/exchange/img_2.png',
            description: '지점안내'
        },
        {
            title: 'Franchise',
            description: '가맹문의'
        },
        {
            title: 'Support',
            img: 'src/assets/exchange/img_3.png',
            description: '고객지원'
        },
        {
            title: 'Korea Gold Exchange'
        }
    ]

    return (
        <div className={'flex justify-center py-16'}>
            <div className="container">
                <div className={'flex flex-col justify-center items-center text-center gap-10'}>
                    <h2 className={'text-5xl text-primary_yellow font-radley italic font-normal'}>Korea Gold
                        Exchange</h2>
                    <p className={'text-base text-primary_gray font-medium'}>그 동안 쌓아온 경험과 기술을 바탕으로 최고의 만족을 위해 성실히 노력하고
                        있고, <br/>
                        소중한 당신에게 행복함이 가득하며 부족하지 않은 최고의 결과를 제공할 것에 중점을 두고 있습니다.</p>
                </div>
                <div className={'flex justify-center flex-wrap gap-3 mt-10'}>
                    {
                        cards.map(({img, title, description}, index) => {
                            return (
                                <div key={index}
                                     className={`w-[400px] h-52
                                      ${img ? `text-white bg-[url('${img}')] bg-cover bg-center bg-black/50`
                                         : 'text-primary_yellow border-2 border-primary_yellow'}`}>
                                    <div
                                        className={`flex h-full flex-col justify-center items-center ${img ? 'bg-black/60' : ''}`}>
                                        <div className={'italic font-radley font-light text-3xl leading-8'}>
                                            {title}
                                        </div>
                                        <span className={'text-lg font-bold'}>{description}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}