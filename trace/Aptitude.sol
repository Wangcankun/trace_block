pragma solidity 0.4.24;

contract Aptitudes {

    uint c_amount; //企业认证费用
    uint m_amount; //第三方认证费用
    address c_account; //企业认证押金池
    address m_account; //第三方认证押金池
    
    struct Aptitude{
        bytes32 a_name; //证书名
        uint a_type; //证书类型
        string a_desc;
    }

    mapping(address => Aptitude) public Aptitudes;

    //初始化认证费用和押金池地址
    function Aptitudes(){
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
            throw;
        }
    }

    //上传认证信息
    function upload( bytes32 name, uint _type, string desc ) public payable {

    }

}