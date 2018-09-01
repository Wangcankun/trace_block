pragma solidity 0.4.24;

contract Companys {

    uint c_amount; //企业认证费用
    uint m_amount; //第三方认证费用
    address c_account; //企业认证押金池
    address m_account; //第三方认证押金池
    
    struct Aptitude{
        string a_name; //证书名
        uint a_type; //证书类型
        string a_desc;
    }

    //构建企业信息
    struct Company{
        address c_address; //企业帐号地址
        string c_name; //企业名
        string c_desc; //详细信息
        bool c_identi; //资质验证状态
        uint c_grade; //资质等级
    }

    struct Product{
        uint256 p_code; //产品码 
        string p_name; //产品名称
        string p_desc; //产品描述
        uint p_amount; //产品价格
        bool p_sale; //产品是否上架
        bool p_saled; //产品是否已经售出
        address p_owner; //产品购买所有者
        address c_address; //产品生成者
    }

    struct User {
        address u_address; //用户地址
        string u_name;//用户名
        string u_desc; //用户信息
        uint u_buy_count; //总购买数
        uint u_eva_count; //总评价数
        uint u_award; //总奖励
        uint u_total_pay; //总支出
    }

    struct Order {
        uint256 o_code; //订单号
        address u_address; //用户地址
        uint256 p_code; //产品编码
        string o_status; //订单状态
        string o_desc; //订单描述
        uint o_amount; //订单金额
    }

    struct Evaluate {
        address p_code;
        string e_type;
        string e_desc;
    }

    Order[] order_history;

    mapping(address => User) public users;
    mapping(uint256 => Order) public orders;
    mapping(address => Order[]) public order_historys;
    mapping(address => Aptitude) public Aptitudes;

    mapping(address => Company) public companys;
    mapping(uint256 => Product) public products;

    event PayForCompany(address pay_company, uint amount);

    //初始化认证费用和押金池地址
    function Companys(){
        c_amount = 10;
        m_amount = 20;
    }

    //获取认证费用
    function getAmount(uint _type) public returns(uint){
        if(_type == 1){
            return c_amount;
        }else if(_type == 2){
            return m_amount;
        }else{
            return 0;
        }
    }

    //上传认证信息
    function upload( string name, uint _type, string desc ) public payable {

    }

    //检查企业
    function checkCompany() public returns(string c_name, bool c_create){
        // if(companys[msg.sender].c_name != ""){
        //     return (c_name,true);
        // }else{
        //     return ("",false);
        // }
    }

    //创建企业
    function createCompany(string _name,string _desc) public payable {

        Company memory company = Company(msg.sender,_name,_desc,false,0);
        companys[msg.sender] = company;

    }

    //获取上链成本
    function getUpperPay(uint _amount) public returns(uint) {
        return getAmount(_amount);

    }

    //上传产品信息
    function upload(string _name,string _desc) public payable {
        uint256 code = rand();
        Product memory product = Product(code,_name,_desc,0,true,false,address(0),msg.sender);
        products[code] = product;
    }

    //根据code获取产品
    function getProduct(uint32 _code) public returns(uint256 p_code, string p_name,string p_desc,uint p_amount,
                                    bool p_sale,bool p_saled,address c_address ) {

        return (products[_code].p_code,products[_code].p_name,products[_code].p_desc,products[_code].p_amount,products[_code].p_sale,products[_code].p_saled,products[_code].c_address);

    }

    //创建用户
    function createUser(string _name,string _desc) public payable {
        User memory user = User(msg.sender,_name,_desc,0,0,0,0);
        users[msg.sender] = user;
    }

    //生成订单
    function createOrder(uint256 _code,string _desc) public payable returns(uint256 o_code, address u_address,address p_code,string o_desc) {

        uint256 code = rand();
        Product memory product = products[_code];
        Order memory order = Order(code,msg.sender,product.p_code,"未支付",_desc,product.p_amount);
        orders[code] = order;
        order_historys[msg.sender].push(order);

    }

    //订单支付
    function payForProduct(uint256 _code) public payable returns(bool){
        Order memory order = orders[_code];
        Product memory product = products[order.p_code];
        if(msg.value < order.o_amount){
            return false;
        } 
        PayForCompany(product.c_address, msg.value);
        //更新产品信息
        product.p_saled = true;
        product.p_owner = msg.sender;
        products[order.p_code] = product;
        //更新订单信息
        order.o_status = "已支付";
        orders[_code] = order;
        return true;    
    }

    //获取订单状态
    function getOrder(uint256 _code) public returns(uint256 o_code, address u_address,uint256 p_code,string o_status, string o_desc,uint o_amount){
        Order memory order = orders[_code];
        return (order.o_code,order.u_address,order.p_code,order.o_status,order.o_desc,order.o_amount);
    } 

    //返回订单历史记录
    function getOrderHistory() public returns(uint256[]){
        
        Order[] memory order_his = order_historys[msg.sender];
        uint256[] order_codes;
        for(uint i = 0; i < order_his.length; i++) {
            order_codes.push(order_his[i].o_code);
        }
        return order_codes;
    }

    //随机数生成器
    function rand() public returns(uint256) {
        uint256 random = uint256(keccak256(block.difficulty,now));
        return  random%10;
    } 


}