import React, { useCallback, useMemo } from 'react';
import './BackBtn.scss';
import { useNavigate, useSearchParams } from 'react-router-dom';

export function BackBtn() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const searchParamsLength = useMemo(()=>searchParams.toString().split("&").length, [searchParams]);

    const goBack = useCallback(() => {
        navigate(-1 * searchParamsLength*3 - 1, {replace: true});
    }, [navigate, searchParamsLength])

    return (
        <div className='main__backbtn_block'>
            <button className="backbtn"
                onClick={goBack}>
                <div><i className="ic_angle-left"></i></div>
                Back
            </button>
        </div>
    )
}
