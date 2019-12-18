import React, { Component } from 'react';
import SeriesList from '../../components/series_list';
import Loader from '../../components/Loader';


class Series extends Component {
    state = {
        series: [],
        seriesName: '',
        isFetching: false
    }

    onChangeSeriesInput = (e) => (
        this.setState({
            seriesName: e.target.value,
            isFetching: true
        }),
    
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then((response) => response.json())
            .then(json => this.setState({ series: json, isFetching: false }))
    )

    render() {
        const { series, seriesName, isFetching } = this.state;

        return (
            <div>
                <div>
                    <input
                        value={seriesName}
                        type='text'
                        onChange={this.onChangeSeriesInput}
                    />
                </div>
                {
                    series.length === 0 && seriesName.trim() === ''
                    &&
                    <p>Search for your favorite series:</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== ''
                    &&
                    <p>We can't find your series, sorry!</p>
                }
                {
                    !isFetching && series.length !== 0 && seriesName.trim() !== ''
                    &&
                    <p>{series.length} series available..</p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching && <SeriesList list={this.state.series} />
                }
            </div>
        )
    }
}


export default Series;