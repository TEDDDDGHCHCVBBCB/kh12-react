import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';

import "./Book.css";
const Book = (props) => {
    const [bookList, setBookList] = useState([]);
   
        //서버에 있는 도서 정보를 불러와서 state에 반영하는 코드
        const loadBook=()=>{

    
        axios({
            url: "http://localhost:8080/book/",
            method: "get"
        })
            .then(response => {
                setBookList(response.data);
            })
            .catch(err => { });
        };
        useEffect(() => {
            loadBook();
    }, []);

    const deleteBook =(book) =>{
        const choice =window.confirm("레알?");
        if(choice===false) return;
        axios({
            url:`http://localhost:8080/book/${book.bookId}`,
            method:"delete"
        })
        .then(response=>{
            loadBook();//목록 갱신
        })
        .catch(err=>{});

    };
    return (
        <>
            <div className="row">
                <div className="col">
                    <h1>책 관리</h1>
                    <p>React CRUD 연습 예제</p>
                </div>
            </div>

            <div className="row-mt-4">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="pc-only">코드</th>
                                <th>제목</th>
                                <th>작가</th>
                                <th className="pc-only">출간일</th>
                                <th>가격</th>
                                <th>출판사</th>
                                <th className="pc-only">페이지수</th>
                                <th className="pc-only">장르</th>
                                <th></th>
                                <th></th>
                            </tr>
                        
                    </thead>
                    <tbody>
                        {bookList.map((book, index) => (
                            <tr key={book.bookId}>
                                <td className="pc-only">{book.bookId}</td>
                                <td>{book.bookTitle}</td>
                                <td>{book.bookAuthor}</td>
                                <td className="pc-only">{book.bookPublicationDate}</td>
                                <td>{book.bookPrice}</td>
                                <td>{book.bookPublisher}</td>
                                <td className="pc-only">{book.bookPageCount}</td>
                                <td className="pc-only">{book.bookGenre}</td>
                                <td><button className="btn btn-primary">
                                    <FaEdit /> 수정
                                </button>
                                </td>
                                <td><button className="btn btn-danger" onClick={e=>deleteBook(book)}>
                                    <FaTrash/> 삭제
                                </button></td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div >
        </>
    );
};
export default Book;