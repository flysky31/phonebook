//search 적용

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";
import SearchBox from "./SearchBox";

const ContatcList = () => {
	const { contactList, keyword } = useSelector((state) => state);
	

	const [filteredList, setFilteredList] = useState([]);

	useEffect(()=> {
		if(keyword !== ''){	//키워드가 서치에서 입력되었을때
			let book = contactList.filter((item) => item.name.includes(keyword))
			setFilteredList(book)
		} else {		//입력값이 없을 때 
			setFilteredList(contactList)
		}
	},[keyword,contactList])

	return (
		<div>
			<SearchBox />
			<div>
				인원 : {filteredList.length}
				{filteredList.map((item) => (
					<ContactItem item={item} />
					//item={item} 바로 자식으로 보낼때는 굳이 리덕스까지 쓸 필요는 없어서 props
				))}
			</div>
		</div>
	);
};

export default ContatcList;
