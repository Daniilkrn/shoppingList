import React from 'react'

const RegErrors = ({errors}) => {
    return (
        <>
            {errors &&
                <div style={{ color: 'red', marginBottom: '16px'}}>
                    {errors.message}
                </div>
            }
        </>
    )
}

export default RegErrors