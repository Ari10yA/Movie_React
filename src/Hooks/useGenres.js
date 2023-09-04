const useGenres = (selectedGenres) => {
    if(selectedGenres.length<1) return "";

    const generatedId = selectedGenres.map((ele)=> ele.id);
    return generatedId.reduce((acc, curr) => acc+','+curr);
        
};

export default useGenres;
