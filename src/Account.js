import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 0
    }

    this.handleDepositClick = this.handleDepositClick.bind(this)
      this.handleWithdrawalClick = this.handleWithdrawalClick.bind(this)
  }

  handleDepositClick(e) {
    e.preventDefault();
    if (isNaN(this.refs.depositAmount.value) || this.refs.depositAmount.value < 0) {
      console.log("Not a am acceptable  number");
    }
    else {
      let depositAmount = +this.refs.depositAmount.value;
      let newBalance = this.state.balance + depositAmount;
      this.setState({
        balance: newBalance
      })
      this.refs.depositAmount.value = '';
    }
  }

    handleWithdrawalClick(e) {
        e.preventDefault();
        if (isNaN(this.refs.withdrawalAmount.value)) {
            console.log("Not a number");
        }
        else {
            let withdrawalAmount = +this.refs.withdrawalAmount.value;
            if (this.state.balance < withdrawalAmount || this.state.balance === withdrawalAmount) {
                this.setState({
                    balance: 0
                })
                this.refs.withdrawalAmount.value = '';
            }
            else {
                let newBalance = this.state.balance - withdrawalAmount;
                this.setState({
                    balance: newBalance
                })
                this.refs.withdrawalAmount.value = '';
            }
        }
        }
  render() {
    let balanceClass = 'balance';
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    }

    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref="depositAmount" />
        <input type="button" value="Deposit" onClick={this.handleDepositClick} />

          <input type="text" placeholder="enter an amount" ref="withdrawalAmount" />
          <input type="button" value="Withdrawal" onClick={this.handleWithdrawalClick} />
      </div>
    )
  }
}
