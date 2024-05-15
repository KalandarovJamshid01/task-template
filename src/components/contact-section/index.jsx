// import React from 'react';
import map from '../../assets/google-map.png'

export default function ContactSectionComponent() {

    return (
        <div className={'w-full flex justify-center pt-8 pb-24 h-auto'}>
            <div className="container flex lg:flex-row flex-col justify-between w-full">
                <div className={'flex flex-col justify-between h-full py-10'}>
                    <div>
                        <h1 className={'text-5xl font-medium text-primary_yellow'}>(주) 한국감정금거래소</h1>
                        <span className={'text-base font-medium text-primary_gray mt-16'}>최고가 매입 순금 18K  14K 백금 은  골드바  귀금속 등 각종 금 거래소</span>
                    </div>

                    <div className={'flex flex-col gap-4'}>
                        <div className={'flex flex-col items-start gap-3'}>
                            <span
                                className={'capitalize bg-primary_yellow rounded-2xl px-2 py-1 text-white'}>Tel.</span>
                            <a href={'tel:031-212-8249'}
                               className={'text-primary_yellow font-medium text-2xl'}>031-212-8249</a>
                        </div>
                        <div className={'flex flex-col items-start gap-3'}>
                            <span
                                className={'capitalize bg-primary_yellow rounded-2xl px-2 py-1 text-white'}>address.</span>
                            <span className={'text-primary_yellow font-medium text-2xl'}>경기 수원시 영통구 광교중앙로 224</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={'border-2 border-primary_yellow lg:w-[700px] w-full'}>
                        <img src={map} alt="" className={'object-cover object-center w-full'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}