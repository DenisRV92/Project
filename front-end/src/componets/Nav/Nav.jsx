import React from 'react';
import style from './Nav.module.scss'
import adress from '../../image/nav/adress.png'
import phone from '../../image/nav/phone.png'
import search from '../../image/nav/search.png'
import cart from '../../image/nav/cart.png'
import icon1 from '../../image/nav/icon1.png'
import icon2 from '../../image/nav/icon2.png'
import user from '../../image/nav/user.png'
import Menu from "../Menu/Menu";
// import $ from "jquery";
// import ss from '../../../../back-end/index.php'
// import * as axios from "axios";

const Nav = () => {
    // function submitForm(e){
    //     e.preventDefault();
    //     console.log(e.target[0].value)
    //     fetch('http://project/back-end/', {
    //         method: 'GET',
    //         body: JSON.stringify({name: e.target[0].value})
    //     }).then(function(response) {
    //         return response.json();
    //     }).then(function(data) {
    //                     alert('form submited')
    //     }).catch(function(err) {
    //         //Failure
    //         alert('Error')
    //     });
    const catalog = (e) => {
        let input=e.target.value
// console.log(e.target.value)
        // $('button').on('click', function () {
        //     let input = $('input').val()
        //     $.ajax('http://project/back-end/page.php', {
        //         method: 'POST',
        //         data: {name: input}
        //     })
        //         .done(function (msq) {
        //             alert(msq)
        //         })
        // })

        // fetch('http://project/back-end/')
        //     .then(response => {
        //         if (response.status >= 400) {
        //             return Promise.reject();
        //         }
        //         return response.json();
        //     })
        //     .then(i => console.log(i))
        //     .catch(() => console.log('ошибка'))
        // let	id_product = 321;
        // let qty_product = 2;
//         fetch("http://project/back-end/"+ "?" + "id_product=" + id_product + "&qty_product=" + qty_product,
//
// // Второй аргумент это объект с указаниями, методаи заголовка
//             {
//                 method: "GET",
//                 headers:{"content-type":"application/x-www-form-urlencoded"}
//             })
//
//             .then( response => {
//                 if (response.status !== 200) {
//
//                     return Promise.reject();
//                 }
//                 return response.text()
//             })
//             .then(i => console.log(i))
//             .catch(() => console.log('ошибка'));
// Создаем экземпляр класса XMLHttpRequest
//         const request = new XMLHttpRequest();
//
// // Указываем путь до файла на сервере, который будет обрабатывать наш запрос
//         const url = "http://project/back-end/page.php";
//
// // Так же как и в GET составляем строку с данными, но уже без пути к файлу
//         const params = "id_product=" + id_product+ "&qty_product=" + qty_product;
//
//         /* Указываем что соединение	у нас будет POST, говорим что путь к файлу в переменной url, и что запрос у нас
//         асинхронный, по умолчанию так и есть не стоит его указывать, еще есть 4-й параметр пароль авторизации, но этот
//             параметр тоже необязателен.*/
//         request.open("POST", url, true);
//
// //В заголовке говорим что тип передаваемых данных закодирован.
//         request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//
//         request.addEventListener("readystatechange", () => {
//
//             if(request.readyState === 4 && request.status === 200) {
//                 console.log(request.responseText);
//             }
//         });
//
// 	// Вот здесь мы и передаем строку с данными, которую формировали выше. И собственно выполняем запрос.
//         request.send(params);
        var url = 'http://project/back-end/index.php';
        var formData = new FormData();
        formData.append('input', input);

        fetch(url, {
            method: 'POST',

            // 'Content-Type': 'text/html'
            body: formData })
            .then(function (response) {
                return response.json();
                // return JSON.parse(response);
             // return  console.log(response)
            })
            .then(function (body) {
                console.log(body);
            });
        // var creds = {
        //     login: 55,
        //     pass: 66
        // }
        // fetch('http://project/back-end/page.php', {
        //     method: "POST",
        //     header: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
        //     body: Object.entries(creds).map(([k,v])=>{return k+'='+v}).join('&') // in jQuery simply use $.param(creds) instead
        // })
        // fetch("http://project/back-end/page.php", {
        //     method: "POST",
        //     // // mode: "same-origin",
        //     // // credentials: "same-origin",
        //     headers: {
        //         "Content-Type": "application/multipart-form-data"
        //     },
        //     body: JSON.stringify({
        //         "payload": '7777'
        //     })
        // })
        // fetch('http://project/back-end/index.php',{ // Может заработать. $_POST = ['a'='b']
        //     method: 'POST',
        //     body:'a=b',
        //     headers: {
        //         "Content-type": "application/x-www-form-urlencoded"
        //     },
        // })
        //     var params = new URLSearchParams();
        //     params.append('firstName', 'Fred');
        //     params.append('lastName', 'Flintstone');
        //     axios({
        //         method: 'post',
        //         url: 'http://project/back-end/',
        //         data: {
        //             firstName: 'Fred',
        //             lastName: 'Flintstone'
        //         }
        //     })
        //         .then(function(response) {
        //
        //             console.log(response);
        //
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         });

        //     document.querySelector('#form')
        //     console.log(document.querySelector('#form'))
        // let url = 'http://project/back-end/';
        // fetch(url)
        //     .then(responce => responce.text())
        //     .then(data => console.log(data))
        // let user = {
        //     name: 'John',
        //     surname: 'Smith'
        // };
        //
        // let response =  fetch('http://project/back-end/index.php', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json;charset=utf-8'
        //     },
        //     body: JSON.stringify(user)
        // });

        // let result =  response.json();
        // axios.post('http://back-end.ru')
        // var data = {
        //     fn: "filename",
        //     str: "this_is_a_dummy_test_string"
        // };
        // // var formData = new FormData();.
        // fetch("http://back-end.ru",{
        //     method:'POST'
        // },data)
        // var formData = new FormData();
        // formData.append('title', 5424);
        // formData.append('body', 'qweqw');
        // fetch("http://back-end.ru", {
        //     method: 'POST',
        //     body: formData,
        // }).then(response => response.json())
        //     .then((data) =>  console.log(data))
        // then(responce => responce.text())
        //     .then(data => console.log(data))
    }
    return (
        <>
            <div className={style.container}>
                <div className={style.nav}>
                    <div className={style.left}>
                        <div className={style.left__contact}>
                            <div className={style.contact__adress}>
                                <img src={adress} alt=""/>
                                <span>Адреса и <br/> режим работы</span>
                            </div>
                            <div className={style.conact__phone}>
                                <img src={phone} alt=""/>
                                <span> +7 (4832) <strong>12-34-56</strong> </span>
                                <p>Заказать обратный звонок</p>
                            </div>
                        </div>
                        <div className={style.left__catalog} id='form'>
                            <input onChange={catalog} id='submit' type="text" name='title'
                                   placeholder='Поиск по каталогу'/>
                            <img src={search} alt=""/>
                            {/*<button>sssqq</button>*/}
                            {/*<input type="submit"/>*/}
                        </div>
                    </div>
                    <div className={style.right}>
                        <div className={style.right__goods}>
                            <img src={cart} alt=""/>
                            <span>Товаров нет</span>
                        </div>
                        <div className={style.right__cabinet}>
                            <img src={icon1} alt=""/>
                            <img src={icon2} alt=""/>

                            <div className={style.cabinet__user}>
                                <img src={user} alt=""/>
                                <span>Войти</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Menu/>
        </>
    );
};

export default Nav;