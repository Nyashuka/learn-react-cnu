import { useEffect, useState } from "react";


export const useChangeTabName = (newTabName) => {
    useEffect(()=> {document.title = newTabName},[newTabName]);
};

export default useChangeTabName;