import React, { Component } from 'react';
import { InputNumber } from '../../components/lib/inputnumber/InputNumber';
import { InputNumberDoc } from '../../components/doc/inputnumber';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

export default class InputNumberDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value1: 42723,
            value2: 58151,
            value3: 2351.35,
            value4: 50,
            value5: 151351,
            value6: 115744,
            value7: 635524,
            value8: 732762,
            value9: 1500,
            value10: 2500,
            value11: 4250,
            value12: 5002,
            value13: 20,
            value14: 50,
            value15: 10,
            value16: 20,
            value17: 20,
            value18: 10.50,
            value19: 25,
            value20: 50
        };
    }

    render() {
        return (
            <div>
                <Head>
                    <title>React InputNumber Component</title>
                    <meta name="description" content="InputNumber is an input component to provide numerical input." />
                </Head>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>InputNumber</h1>
                        <p>InputNumber is an input component to provide numerical input.</p>
                    </div>

                    <DocActions github="inputnumber/index.js" />
                </div>

                <div className="content-section implementation">
                    <div className="card">
                        <h5>Numerals</h5>
                        <div className="p-fluid grid formgrid">
                            <div className="field col-12 md:col-3">
                                <label htmlFor="integeronly">Integer Only</label>
                                <InputNumber inputId="integeronly" value={this.state.value1} onValueChange={(e) => this.setState({ value1: e.value })} />
                            </div>
                            <div className="field col-12 md:col-3">
                                <label htmlFor="withoutgrouping">Without Grouping</label>
                                <InputNumber inputId="withoutgrouping" value={this.state.value2} onValueChange={(e) => this.setState({ value2: e.value })} mode="decimal" useGrouping={false} />
                            </div>
                            <div className="field col-12 md:col-3">
                                <label htmlFor="minmaxfraction">Min-Max Fraction Digits</label>
                                <InputNumber inputId="minmaxfraction" value={this.state.value3} onValueChange={(e) => this.setState({ value3: e.value })} mode="decimal" minFractionDigits={2} maxFractionDigits={5} />
                            </div>
                            <div className="field col-12 md:col-3">
                                <label htmlFor="minmax">Min-Max Boundaries</label>
                                <InputNumber inputId="minmax" value={this.state.value4} onValueChange={(e) => this.setState({ value4: e.value })} mode="decimal" min={0} max={100} />
                            </div>

                            <div className="field col-12 md:col-3">
                                <label htmlFor="locale-user">User Locale</label>
                                <InputNumber inputId="locale-user" value={this.state.value5} onValueChange={(e) => this.setState({ value5: e.value })} mode="decimal" minFractionDigits={2} />
                            </div>
                            <div className="field col-12 md:col-3">
                                <label htmlFor="locale-us">United States Locale</label>
                                <InputNumber inputId="locale-us" value={this.state.value6} onValueChange={(e) => this.setState({ value6: e.value })} mode="decimal" locale="en-US" minFractionDigits={2} />
                            </div>
                            <div className="field col-12 md:col-3">
                                <label htmlFor="locale-german">German Locale</label>
                                <InputNumber inputId="locale-german" value={this.state.value7} onValueChange={(e) => this.setState({ value7: e.value })} mode="decimal" locale="de-DE" minFractionDigits={2} />
                            </div>
                            <div className="field col-12 md:col-3">
                                <label htmlFor="locale-indian">Indian Locale</label>
                                <InputNumber inputId="locale-indian" value={this.state.value8} onValueChange={(e) => this.setState({ value8: e.value })} mode="decimal" locale="en-IN" minFractionDigits={2} />
                            </div>
                        </div>

                        <h5>Currency</h5>
                        <div className="grid p-fluid">
                            <div className="field col-12 md:col-3">
                                <label htmlFor="currency-us">United States</label>
                                <InputNumber inputId="currency-us" value={this.state.value9} onValueChange={(e) => this.setState({ value9: e.value })} mode="currency" currency="USD" locale="en-US" />
                            </div>
                            <div className="field col-12 md:col-3">
                                <label htmlFor="currency-germany">Germany</label>
                                <InputNumber inputId="currency-germany" value={this.state.value10} onValueChange={(e) => this.setState({ value10: e.value })} mode="currency" currency="EUR" locale="de-DE" />
                            </div>
                            <div className="field col-12 md:col-3">
                                <label htmlFor="currency-india">India</label>
                                <InputNumber inputId="currency-india" value={this.state.value11} onValueChange={(e) => this.setState({ value11: e.value })} mode="currency" currency="INR" currencyDisplay="code" locale="en-IN" />
                            </div>
                            <div className="field col-12 md:col-3">
                                <label htmlFor="currency-japan">Japan</label>
                                <InputNumber inputId="currency-japan" value={this.state.value12} onValueChange={(e) => this.setState({ value12: e.value })} mode="currency" currency="JPY" locale="jp-JP" />
                            </div>
                        </div>

                        <h5>Prefix and Suffix</h5>
                        <div className="grid p-fluid">
                            <div className="field col-12 md:col-3">
                                <label htmlFor="mile">Mile</label>
                                <InputNumber inputId="mile" value={this.state.value13} onValueChange={(e) => this.setState({ value13: e.value })} suffix=" mi" />
                            </div>
                            <div className="field col-12 md:col-3">
                                <label htmlFor="percent">Percent</label>
                                <InputNumber inputId="percent" value={this.state.value14} onValueChange={(e) => this.setState({ value14: e.value })} prefix="%" />
                            </div>
                            <div className="field col-12 md:col-3">
                                <label htmlFor="expiry">Expiry</label>
                                <InputNumber inputId="expiry" value={this.state.value15} onValueChange={(e) => this.setState({ value15: e.value })} prefix="Expires in " suffix=" days" />
                            </div>
                            <div className="field col-12 md:col-3">
                                <label htmlFor="temperature">Temperature</label>
                                <InputNumber inputId="temperature" value={this.state.value16} onValueChange={(e) => this.setState({ value16: e.value })} prefix="&uarr; " suffix="℃" min={0} max={40} />
                            </div>
                        </div>

                        <h5>Buttons</h5>
                        <div className="grid p-fluid">
                            <div className="field col-12 md:col-3">
                                <label htmlFor="stacked">Stacked</label>
                                <InputNumber inputId="stacked" value={this.state.value17} onValueChange={(e) => this.setState({ value17: e.value })} showButtons mode="currency" currency="USD" />
                            </div>
                            <div className="field col-12 md:col-3">
                                <label htmlFor="horizontal">Horizontal with Step</label>
                                <InputNumber inputId="horizontal" value={this.state.value18} onValueChange={(e) => this.setState({ value18: e.value })} showButtons buttonLayout="horizontal" step={0.25}
                                    decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" mode="currency" currency="EUR" />
                            </div>
                            <div className="field col-12 md:col-3">
                                <label htmlFor="minmax-buttons">Min-Max Boundaries</label>
                                <InputNumber inputId="minmax-buttons" value={this.state.value20} onValueChange={(e) => this.setState({ value20: e.value })} mode="decimal" showButtons min={0} max={100} />
                            </div>
                        </div>

                        <div className="grid">
                            <div className="field col-12 md:col-3">
                                <label htmlFor="vertical" style={{ display: 'block' }}>Vertical</label>
                                <InputNumber inputId="vertical" value={this.state.value19} onValueChange={(e) => this.setState({ value19: e.value })} mode="decimal" showButtons buttonLayout="vertical" style={{ width: '4rem' }}
                                    decrementButtonClassName="p-button-secondary" incrementButtonClassName="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                            </div>
                        </div>
                    </div>
                </div>

                <InputNumberDoc />
            </div>
        );
    }
}

