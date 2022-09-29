const Pagination = ({handleClick, totalPages, page}) => {

    const pageButtons = []
    for(let i = 1; i<=totalPages; i++){
        const id= page==i? "clicked": ""
        pageButtons.push(
            <li id={id} onClick={()=>handleClick(i)}>
                {i}
            </li>
        )
    }

  return (
    <ul className="pagination">
      <li onClick={()=>handleClick(page-1)} className="icon">
         { "<"}
      </li>
      {pageButtons}
      <li onClick={()=>handleClick(page+1)} className="icon">
         {">"}
      </li>
    </ul>
  );
};


export default Pagination;