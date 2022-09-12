import React, { Component } from 'react';
import Btn from '../buttons/Btn';
import Statistic from '../statistic/Statistic'

class Counter extends Component {
  static defaultProps = {
      positive: 0,
      neutral: 0,
      negative: 0,
  };

  state = {
      positiveValue: this.props.positive,
      neutralValue: this.props.neutral,
      negativeValue: this.props.negative,
  };

  handlePositive = () => {
    this.setState(prevState => ({
      positiveValue: prevState.positiveValue + 1,
    }));
    };
    
  handleNeutral = () => {
    this.setState(prevState => ({
      neutralValue: prevState.neutralValue + 1,
    }));
    };

  handleNegative = () => {
    this.setState(prevState => ({
        negativeValue: prevState.negativeValue + 1,
    }));
    };

  countTotal = () => {
        return this.state.positiveValue + this.state.neutralValue + this.state.negativeValue;
    };

  countPercentage = () => {
    return Math.round((this.state.positiveValue * 100) / this.countTotal());
  };

  render() {
      const { positiveValue } = this.state;
      const { neutralValue } = this.state;
      const { negativeValue } = this.state;

      const total = this.countTotal();
      const positivePercentage = this.countPercentage();
    //   console.log(total);

    return (
      <div className="Counter">
        <Btn
          onPositive = {this.handlePositive}
          onNeutral = {this.handleNeutral}
          onNegative = {this.handleNegative}
        />
        <Statistic
          neutralValue = {neutralValue}
          positiveValue = {positiveValue}
          negativeValue = {negativeValue}
          total = {total}
          positivePercentage =  {positivePercentage}
            />
      </div>
    );
  }
}

export default Counter;