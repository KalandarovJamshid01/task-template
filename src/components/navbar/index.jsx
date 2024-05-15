// import React from 'react';
import logo from '../../assets/logo.png'

export default function NavbarComponent() {

    const navLink = [
        {
            label: '업체소개',
            value: ''
        },
        {
            label: '주요업무',
            value: ''
        },
        {
            label: '지점안내',
            value: ''
        },
        {
            label: '가맹문의',
            value: ''
        },
        {
            label: '고객지원',
            value: ''
        }
    ]

    return (
        <div className={'w-full flex justify-center h-20'}>
            <div className={'container flex items-center justify-between'}>
                <div >
                    <img src={logo} alt="template-logo" className={'w-72'}/>
                </div>
                <div className={'flex items-center gap-20'}>
                    {
                        navLink.map(({label}, index) => {
                            return (
                                <a key={index} href={'#'}
                                   className={'text-primary_gray hover:text-primary_yellow font-semibold'}>{label}</a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}
