pragma solidity 0.4.24;

import "./Company.sol";

contract User {

    struct User {
        address u_address; //用户地址
        bytes32 u_name;//用户名
        string u_desc; //用户信息
        uint u_buy_count; //总购买数
        uint u_eva_count; //总评价数
        uint u_award; //总奖励
        uint u_total_pay; //总支出
    }

    struct Order {
        address o_code; //订单号
        address u_address; //用户地址
        address p_code; //产品编码
        bytes32 o_status; //订单状态
        string o_des; //订单描述
    }

    struct Evaluate {
        address p_code;
        bytes32 e_type;
        string e_desc;
    }

    Order[] order_history;

    mapping(address => User) public users;
    mapping(address => Order) public orders;
    mapping(address => Order[]) public order_historys;

    //创建用户
    function createUser(bytes32 _name,string _desc) public payable {
        User memory user = User(msg.sender,_name,_desc,0,0,0,0);
        users[msg.sender] = user;
    }

    //生成订单
    function createOrder(address _code) public payable returns(address o_code, address u_address,address p_code,string o_des) {
        
    }

    //订单支付
    function payForProduct(address _code) public payable returns(bool){

    }

    //获取订单状态
    function getOrder(address _code) public returns(address o_code, address u_address,address p_code,bytes32 o_status, string o_des){

    } 

    //返回订单历史记录
    function getOrderHistory(address _address) public returns(string){

    }

    
    

}