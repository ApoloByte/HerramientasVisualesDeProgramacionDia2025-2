import React, { useState } from 'react'

export const SearchBox = () => {
    const [searchValue, setSearchValue] = useState("")
    const handleInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(searchValue + event.target.value);
    };
    return (
        <>
            {searchValue}
            <input type="text" value={""} onChange={handleInputSearch} />
        </>
    )
}
