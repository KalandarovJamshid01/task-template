// import React from 'react';
import headerMan from '../../assets/header-man.png'

export default function HeaderComponent() {
    return (
        <div className={'flex justify-center w-full h-[632px] mt-3 bg-header bg-cover bg-center'}>
            <div className="container py-9 flex justify-between items-center">
                <div className={'w-3/5 lg:flex h-full hidden'}>
                    <div className={'w-full justify-center grow h-full border-2 border-primary_yellow bg-black/70'}>
                        <div className={'relative h-full'}>
                            <img src={headerMan} alt="header-man" className={'absolute bottom-0 left-0 h-[615px]'}/>
                            <div
                                className={'w-full flex justify-center pt-3 font-radley text-primary_gray text-4xl font-normal leading-10 italic'}>
                                Korea Gold Exchange
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'lg:w-2/5 w-full flex flex-col justify-center text-center items-center'}>
                    <h2 className={'font-bold text-white leading-snug tracking-wide text-6xl'}>최고가 매입</h2>
                    <p className={'text-3xl text-primary_yellow '}>24K 18K 14K 다이아몬드 <br/>
                        치금 폐금 잡금 은제품</p>
                </div>
            </div>
        </div>
    );
}
