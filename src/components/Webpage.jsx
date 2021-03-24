import React from 'react';
import background from '../images/test.png';
import '../assets/css/webpage.css'

class webpage extends React.Component {


    constructor() {
        super();

        this.state = {
            value: 0,
            calculatedValue: 0
        }
    }

    handleChange(e) {
        var value = e.target.value;
        var calculatedValue = Math.round(value * (1.16 / 100) * 100 + Number.EPSILON) / 100;
        var resultValue = Math.round((calculatedValue / 10) * 100 + Number.EPSILON) / 100;

        this.setState({
            value: e.target.value,
            calculatedValue: calculatedValue,
            resultValue: resultValue
        })
    }

    render() {
        return (
            <div className='webpage'>
                <div className='header'>
                    <img src={background} />
                </div>

                <div className='description'>

                    <div className='textcontent'>
                        With <span class="valuecolor">&#8356;{this.state.value}</span> your estimated earnings could be <span class="calculatedvalue">&#8356;-{this.state.calculatedValue}</span> per year with fees of just <span class="resultvalue">&#8356;{this.state.resultValue}</span> per year
                    </div>

                    <div className='statictextcontent'>
                        Estimated earnings are based on -1.16% per annum before tax and any pontential loses.As with most forms of investment,peer-to-peer lending carries a degree to your capital;in this case if borrowers were unable to replay their loans.
                    </div>


                </div>

                <div className='slidercomponent'>
                    <div className='rangestart'>&#8356;0</div>
                    <div className='sliderallignment'>
                        <input type="range" onChange={this.handleChange.bind(this)} id="volume"
                            min="0" max="250000" class="slider" />
                        <label for="volume">&#8356;{this.state.value}</label>
                    </div>
                    <div className='rangeend'>&#8356;250000</div>
                </div>
            </div>
        )
    }
}
export default webpage;