pragma solidity 0.4.24;

contract Company {

    //构建企业信息
    struct Company{
        address c_address; //企业帐号地址
        bytes32 c_name; //企业名
        string c_desc; //详细信息
        bool c_identi; //资质验证状态
        uint c_grade; //资质等级
    }

    struct Product{
        address p_code; //产品码 
        bytes32 p_name; //产品名称
        string p_desc; //产品描述
        uint p_amount; //产品价格
        bool p_sale; //产品是否上架
        bool p_saled; //产品是否已经售出
        address p_owner; //产品购买所有者
        address c_address; //产品生成者
    }

    mapping(address => Company) public companys;
    mapping(address => Product) public products;

    //检查企业
    function checkCompany() public returns(bytes32 c_name, bool c_create){
        if(IsNull(companys[msg.sender])){
            return (c_name,true);
        }else{
            return ("",false);
        }
    }

    //获取上链成本
    function getUpperPay(uint p_amount) public returns(uint) {

    }

    //上传产品信息
    function upload(bytes32 _name,string _desc) public payable {

    }

    //根据code获取产品
    function getProduct(address _code) public returns(bytes32 p_name,string p_desc,uint p_amount,
                                    bool p_sale,bool p_saled,address p_address,address c_address ) {



    }

    function rand() public returns(uint256) {
        uint256 random = uint256(keccak256(block.difficulty,now));
        return  random%10;
    } 


}