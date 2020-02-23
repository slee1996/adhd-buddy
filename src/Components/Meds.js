import React, { Component } from 'react'
import axios from 'axios'

class Meds extends Component {
    constructor(){
        super()
        this.state = {
            meds: [],
            search: ''
        }
    }

    getMeds = async() => {
        const meds = await axios.get(`http://localhost:4000/api/meds`).then(res => {
            this.setState({meds: res.data})
        })
        .catch(err => console.log(err))
        if(meds){console.log(meds[0])}
    }

    componentDidMount(){
        this.getMeds()
    }

    filterItems = (arr, query) => {
        return arr.filter(function(el) {
            return el.indexOf(query.toLowerCase()) !== -1
        })
      }

    handleSearch = (event) => {
        const meds = this.state.meds
        const input = this.state.input

        this.setState({
            [event.target.name]: event.target.value
        })

        //this.filterItems(meds, input)
    }

    

    render(){
        console.log(this.state.meds)

        const meds = this.state.meds.map((med, i) => (
            <div id='med-div' key={i} >
                <h4 id='med-column'   > {med.med_name} </h4>
                <h4 id='med-column'   > {med.dose} </h4>
                <a id='med-column' href={med.drug_sheet}  > Drug Sheet </a>
            </div>
            ))
            console.log(meds)
        return(
            <>
            <label>
                    Search MedsDB:  
                    <input onChange={(event) => this.handleSearch(event)} />
                </label>
            <div id='medsdb-div'>
                {meds}
            </div>
            </>
        )
    }
}

export default Meds;