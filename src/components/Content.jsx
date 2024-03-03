import Card from "./Card"

let filter_type = "all"

const Content = (props)=>{
    const data = props.data;
    const search = props.search;
    const filter_type = props.filter;
    const content = 
      data.
      filter((item)=>{
        return search.toLowerCase() === ''
        ? item
        : item.name.toLowerCase().includes(search.toLowerCase())
      })
      .
      filter((item)=>{
        return filter_type.toLowerCase() === 'all'
        ? item
        : item.type.toLowerCase().includes(filter_type.toLowerCase())
      })
      .map((item)=>
        <Card item = {item} key={item.id}/>
    );

    return(
      <section className='content'>
        {
        content[0]!=null 
        ? content 
        : <div className='flex justify-center items-center'>
            <span className='text-gray-300 font-bold'>
              NOT FOUND
            </span>
          </div> 
        }
      </section>
      
    );
  }

export default Content;