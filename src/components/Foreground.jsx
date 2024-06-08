import React, {useState} from 'react'
import Card from "./Card";


function Foreground() { 

    const ref = React.useRef(null);

    const data = [
        {desc: "Lorem ipsum dolor sit amet.", filesize: ".9mb", close: true, tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}},
        {desc: "Lorem ipsum dolor sit amet.", filesize: ".9mb", close: true, tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"}},
        {desc: "Lorem ipsum dolor sit amet.", filesize: ".9mb", close: true, tag: {isOpen: true, tagTitle: "Upload", tagColor: "green"}},
    ];
  return (
    <div ref={ref}className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flexwrap-wrap p-5'>
        {data.map((item, index) =>(
            <Card data={item} reference={ref}/>
        )) }
    </div>
  )
}

export default Foreground

