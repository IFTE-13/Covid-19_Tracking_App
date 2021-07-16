import React from 'react';
import Cards from './Components/Cards/Cards';
import Chart from './Components/Chart/Chart';
import styles from './App.module.css';
import { fetchData } from './api'
import CountryPicker from './Components/CountryPicker/CountryPicker';
import pic from './images/image.png';

class App extends React.Component {

    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const data = await fetchData();

        this.setState({ data });
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);

        this.setState({ data, country: country });
    }

    render() {

        const { data, country } = this.state
        return (
            <div className={styles.container}>
                <img className={styles.image} src={pic} alt="COVID-19" />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
                <footer>All rights reserved by IFTE'13@2021</footer>
            </div>
        )
    }
}

export default App;