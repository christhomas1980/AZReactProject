
import React,{useContext} from 'react';
import { useState} from "react";
import { useRef } from 'react';
import { useEffect } from 'react';
import axios from "axios";
import {MyContext} from './Context';
import 'react-data-grid/lib/styles.css';
import { DataGrid } from 'react-data-grid';



//https://localhost:7048/api/v1/CloudOwner
//https://azurecloudapi20250617085802-hhfehtcta8g6gta0.canadacentral-01.azurewebsites.net/api/v1/CloudOwner
let baseUrl = 'https://azurecloudapi20250617085802-hhfehtcta8g6gta0.canadacentral-01.azurewebsites.net/api/v1/CloudOwner';

const columns=[
    {key:'empid',name:'Empid'},
    {key:'name',name:'Name'},
    {key:'amount',name:'Amount'},
    {key:'email',name:'Email'}

];

const rows=[
    {id:0,title:'IffD'},
    {id:1,title:'rrr'},
    {id:2,title:'rrr'}
];

let users2 = [

];

const GetAll = ({ }) => {

    //const {isApiCall, setApiCall}  = useContext(MyContext);   
    const isApiCall  = useContext(MyContext);  
    const [ownerData, setOwnerData] = useState('');

 
    useEffect(() => {
        async function getUser() {
            try {
                users2 = [];
               if(isApiCall.apiMethod=='GetAll' && users2!= [] )
               {
          
               // https://localhost:7048/api/v1/CloudOwner
              // https://azurecloudapi20250617085802-hhfehtcta8g6gta0.canadacentral-01.azurewebsites.net/api/v1/CloudOwner
               const response = await axios.get('https://azurecloudapi20250617085802-hhfehtcta8g6gta0.canadacentral-01.azurewebsites.net/api/v1/CloudOwner');
                // const response = await axios.get('https://localhost:7048/api/v1/CloudOwner');
                setOwnerData(response.data.data);
                return response.data.data;
               }
               else if(isApiCall.apiMethod=='GetUser'&& users2!= [] )
               {

           
              // https://localhost:7048/api/v1/CloudOwner
              // https://azurecloudapi20250617085802-hhfehtcta8g6gta0.canadacentral-01.azurewebsites.net/api/v1/CloudOwner
               const response = await axios.get('https://azurecloudapi20250617085802-hhfehtcta8g6gta0.canadacentral-01.azurewebsites.net/api/v1/CloudOwner/owner-name/'+isApiCall.name);
               // const response = await axios.get('https://localhost:7048/api/v1/CloudOwner/owner-name/'+isApiCall.name);
              
                setOwnerData(response.data.data);
                return response.data.data;
               }
               else if(isApiCall.apiMethod=='PostUser')
               {

           
              // https://localhost:7048/api/v1/CloudOwner
              // https://azurecloudapi20250617085802-hhfehtcta8g6gta0.canadacentral-01.azurewebsites.net/api/v1/CloudOwner

            const payload =   
            
                     {empid: 0, name:isApiCall.name,amount:isApiCall.amount, email:isApiCall.email};
            
              const response = await axios.post('https://azurecloudapi20250617085802-hhfehtcta8g6gta0.canadacentral-01.azurewebsites.net/api/v1/CloudOwner/owner-name',payload);
                // const response = await axios.post('https://localhost:7048/api/v1/CloudOwner/owner-name',payload);
               setOwnerData(response.data.data);
                return response.data.data;
               }
                else if(isApiCall.apiMethod=='GetUser'&& users2!= [] )
               {

           
              // https://localhost:7048/api/v1/CloudOwner
              const response = await axios.get('https://azurecloudapi20250617085802-hhfehtcta8g6gta0.canadacentral-01.azurewebsites.net/api/v1/CloudOwner/owner-name/'+isApiCall.name);
               // const response = await axios.get('https://localhost:7048/api/v1/CloudOwner/owner-name/'+isApiCall.name);
              
                setOwnerData(response.data.data);
                return response.data.data;
               }
               else if(isApiCall.apiMethod=='DeleteUser')
               {

           
              // https://localhost:7048/api/v1/CloudOwner
              // https://azurecloudapi20250617085802-hhfehtcta8g6gta0.canadacentral-01.azurewebsites.net/api/v1/CloudOwner

            
              const response = await axios.delete('https://azurecloudapi20250617085802-hhfehtcta8g6gta0.canadacentral-01.azurewebsites.net/api/v1/CloudOwner/owner-name?ownerid='+2);
              
               setOwnerData(response.data.data);
                return response.data.data;
               }

            } catch (error) {
                console.error(error);
            }
        }

        const mapData = async () => {
            const result = await getUser();
         if(result!= null )
        {
           
        
            var arrayLength = result.length;
            for (var i = 0; i < arrayLength; i++) {
                users2.push(result[i])
                //Do something
            }

        }
        }

        if(users2!= [] )
        {
           mapData();
        }
       

      

    }, [isApiCall]);




    return (
        <div>
            <h1>AZ Inventory</h1>
            <div>

           {/*    {users2.map((user, index) => (
                    <div key={index}>
                        Name: {user.name}, Amount: {user.amount}
                    </div>
                ))} */}
                <DataGrid columns={columns} rows={users2}   defaultColumnOptions={{
        minWidth: 100,
        resizable: true,
        sortable: true,
        draggable: true
      }}/>
            </div>
        </div>

    );
}

export default GetAll;