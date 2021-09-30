/*
 * ==================================
 * @Author: PFinal南丞
 * @Date: 2021-09-30 13:49:38
 * @Description:  高山仰止,景行行制,虽不能至,心向往之
 * ==================================
 */
const WIN = require('ui/window');
const LANG = require('../language/');
class UI {
    constructor(opt) {
        // 创建一个windows窗口
      this.win = new WIN({
        title: `${LANG['title']} - ${opt['url']}`,
        height: 444,
        width: 820,
      });
      this.createMainLayout();
      return {
        onScan: (func) => {
            
        },
        onAbout: () => {}
        }
    }
    createMainLayout() {
        let layout = this.win.win.attachLayout('2E');
        // 扫描输入
        layout.cells('a').hideHeader();
        layout.cells('a').setText(`<i class="fa fa-cogs"></i> ${LANG['title']}`);
        // 扫描结果
        layout.cells('b').setText(`<i class="fa fa-bars"></i> ${LANG['result']}`);
        layout.cells('b').collapse();
    
        // 创建toolbar
        this.createToolbar(layout.cells('a'));
        // 创建form
        this.createForm(layout.cells('a'));
        // 创建grid
        //this.createGrid(layout.cells('b'));
    
        this.layout = layout;
    }
    createToolbar(cell) {
        let toolbar = cell.attachToolbar();
        toolbar.loadStruct([
            { id: 'start', type: 'button', text: LANG['toolbar']['start'], icon: 'play' }
        ]);
        this.toolbar = toolbar;
    }
    createForm(cell) {
        let formdata=[{
            type: 'settings', position: 'label-left',
            labelWidth: 150, inputWidth: 200
          }, {
            type: 'block', inputWidth: 'auto',
            offsetTop: 12,
            list: [{
                type: 'input', label: LANG['form']['path'], name: 'scanpath',
                required: true, validate:"NotEmpty",
                value: './'
              }, {
                type: 'input', label: LANG['form']['search'], name: 'scanname',
                required: true,
                value: '.php'
            }]
        }];
        let form = cell.attachForm(formdata, true);
        form.enableLiveValidation(true);
        this.form = form;
    }

}

module.exports = UI;