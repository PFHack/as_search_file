/*
 * ==================================
 * @Author: PFinal南丞
 * @Date: 2021-09-30 13:51:31
 * @Description:  高山仰止,景行行制,虽不能至,心向往之
 * ==================================
 */
class Scanner {
    constructor(opt, argv) {
      return new Promise((res, rej) => {
          // 初始化核心模块
          let core = new antSword['core'][opt['type']](opt);
          // 请求数据
          let code = {};
          if (opt['type'] == 'php') {
              code = {
                  _: this.template[opt['type']](argv.scanpath, argv.scanext)
              }
              core.request(code).then(res)
              .catch((err)=>{return rej(err);});
          }
        })
    }
      /**
   * 扫描代码函数
   * @return {[type]}      [description]
   */
       get template() {
            return {
                php: (scanpath, scanext) => ``
            }
        }
}
module.exports = Scanner;