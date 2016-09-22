import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import PostionContainer from './PostionContainer';
import './index.css';

import address from './address';
import { 
    parseAddress,
    parseAddressName

} from './util/util';
let addressMap = parseAddress(address);



class SelectCity extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'SelectCity';


        let params = this.props.params;
        let deepMap = params.deepMap;

         /* 构建默认数据的选中值 */
        let selectVal = [];

        deepMap.forEach((v, i) => {
            let value = v.value;
            if(value !== undefined) {
                selectVal.push(value);
            }
        });

        let l = selectVal.length;

        let state = {
            show : false,
            /* 定位坐标 */
            input: {
                left: -99999,
                top: -99999,
                width: '100%'
            },
            index: l > 0 ? l - 1 : 0,
            valIndex: l > 0 ? l - 2 : 0,
            selectVal: l > 0 ? /* selectVal默认值 */ selectVal: [],
            selectName: l > 0 ? /* 根据默认值解析中文名称 */ parseAddressName(selectVal, addressMap) : []
        }
        this.state = state
    }
    show() {
        this.setState({
            show : true
        });
    }
    input() {
        let params = this.props.params;
        let input = this.refs.city;

        return {
            left: input.offsetLeft,
            top: input.offsetTop + input.offsetHeight,
            width: params.width ? params.width : input.offsetWidth
        }
    }
    componentDidMount () {
        let input = this.input();
        this.setState({
            input: input
        });
    }
    changeState(params) {

        let props = this.props;

        /**
         * [max 最大联动的层级]
         */
        let deepMap = props.params.deepMap;
        let max = deepMap.length;


        let {index, selectVal} = params;


        /* index不能大于max */
        if(index >= max) {
            params.index = max - 1;
            params.valIndex = max - 2;
        }
        
        if(selectVal) {
            params.selectName = parseAddressName(selectVal, addressMap);
        }
        

        /* 更新state */
        this.setState(params);
    }
    setInput() {}
    getData() {
        return {
            ids: this.state.selectVal,
            names: this.state.selectName
        }
    }
    render() {

        let selectName = this.state.selectName.join(' ');

        return (
            <div className="selectCity">
                <input  type="text" className="city" id="city" ref="city" onClick={this.show.bind(this)} value={selectName} placeholder="请选择城市" onChange={this.setInput.bind(this)} readOnly />
                <PostionContainer  {...this.state} {...this.props} changeState={this.changeState.bind(this)} addressMap={addressMap}/>
            </div>
        )
    }
}


let params = {
    deepMap: [{name: '省', value: 2 },{name: '市', value: 13},{name: '区', value: 335},{name: '街道', value: 4091}],
    deepMap: [{name: '省', value: 3 },{name: '市', value: 15},{name: '区', value: 409},{name: '街道', value: 4091}],
    // deepMap: [{name: '省'},{name: '市'},{name: '区'},{name: '街道'}],
    // selectVal: [3, 15, 409, 4091],
    width: 450
}

ReactDOM.render(
    <SelectCity params={params}/>,
    document.getElementsByTagName('body')[0]
)


