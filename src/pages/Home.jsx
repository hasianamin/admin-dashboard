import React, { useEffect, useRef, useState } from 'react';
import * as Icon from 'react-bootstrap-icons'
import { connect } from 'react-redux';
import Card from '../components/Card';

const Home=(props)=>{

    const [users,setUsers] = useState([])
    const [params,setParams] = useState({
        limit: 4,
        offset: 0 
    })
    const [search,setSearch] = useState(null)
    const [filterData,setFilterData] = useState(null)
    // const head = useRef(null)

    // const executeScroll = () => head.current.scrollIntoView()

    useEffect(()=>{
        setUsers(props.Inventory)
    },[])

    useEffect(()=>{
        renderCard(params.limit,params.offset)
    },[params])

    useEffect(()=>{
        console.log(search)
        getFilterData(search)
    },[search])

    useEffect(()=>{
        console.log(filterData)
        renderCard()
    },[filterData])

    const renderCard=(limit,offset)=>{
        if(filterData){
            return filterData.map((val,index)=>{
                if(index >= offset && index < limit){
                    return (
                        <div className="home-contents" key={index}>
                            <Card data={val}/>
                        </div>
                    )
                }
            })
        } else {
            let people = props.Inventory.people
            return people.map((val,index)=>{
                if(index >= offset && index < limit){
                    return (
                        <div className="home-contents" key={index}>
                            <Card data={val}/>
                        </div>
                    )
                }
            })
        }
    }

    const modifyPage=(type)=>{
        if(type) {
            setParams({
                limit: params.limit+4,
                offset: params.offset+4
            })
        } else{
            setParams({
                limit: params.limit-4,
                offset: params.offset-4
            })
        }
        // executeScroll()
    }

    const getFilterData=async(param)=>{
        if(param){
            console.log(param)
            let toLower = param.toLowerCase()
            const regex = new RegExp(`${toLower}`)
            let people = props.Inventory.people
            let matches = await people.filter(value => {
                if(regex.test(value.name.first.toLowerCase())){
                    return value.name.first
                }
            })
            setFilterData(matches)
        } else {
            setFilterData(null)
        }
    }

    if(!users){
        return <div>Loading</div>
    }

    return(
        <div className='home'>
            <div className="home-contents">
                <div className="home-content">
                    <p className='content-title'>Personnel List</p>
                    <p className='sub-title'>List of all personnels</p>
                </div>
                <div className="home-content">
                    <div className="input-container">
                        <div className="icon">
                            <Icon.Search size={24}/>
                        </div>
                        <input className="input-field" type="text" placeholder="Find Personnels" onChange={text => setSearch(text.target.value)}/>
                    </div>
                    <div className="btn btn-primary">
                        <p>Add Personnel</p>
                        <Icon.Plus size={24}/>
                    </div>
                </div>
            </div>
            <div className="container-helper">
                {renderCard(params.limit,params.offset)}
            </div>
            <div className="footer-action">
                {
                    params.offset === 0?
                    <div className="footer-btn disable-btn">
                        <Icon.ChevronLeft size={24}/>
                        <p>Previous Page</p>
                    </div>
                    :
                    <div className="footer-btn" onClick={()=>modifyPage(0)}>
                        <Icon.ChevronLeft size={24}/>
                        <p>Previous Page</p>
                    </div>
                }
                {
                    filterData?
                        params.limit >= filterData.length?
                        <div className="footer-btn disable-btn">
                            <p>Next Page</p>
                            <Icon.ChevronRight size={24}/>
                        </div>
                        :
                        <div className="footer-btn" onClick={()=>modifyPage(1)}>
                            <p>Next Page</p>
                            <Icon.ChevronRight size={24}/>
                        </div>
                    :
                    params.limit === 28?
                    <div className="footer-btn disable-btn">
                        <p>Next Page</p>
                        <Icon.ChevronRight size={24}/>
                    </div>
                    :
                    <div className="footer-btn" onClick={()=>modifyPage(1)}>
                        <p>Next Page</p>
                        <Icon.ChevronRight size={24}/>
                    </div>
                }
            </div>
        </div>
    )
}

const ReduxProps=(state)=>{
    return {
        Inventory: state.Inventory
    }
}

export default connect(ReduxProps)(Home)