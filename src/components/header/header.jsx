import React from 'react'
import {Affix, Button} from 'antd'
import "../header/header.less"


export default function Header() {
  return (
    <>
    
    <Affix offsetTop={0} className="navbar-container">
        <ul>
            <li><a href="#"><i className="iconfont icon-shouye"></i>&nbsp;首页</a></li>
            <li><a href="#"><i class="iconfont icon-bijiben1"></i>&nbsp;开发记录</a></li>
            <li><a href="#"><i class="iconfont icon-yuandaima"></i>&nbsp;大前端</a></li>
            <li><a href="#"><i class="iconfont icon-zuzhijiagou1"></i>&nbsp;框架</a></li>
            <li><a href="#"><i class="iconfont icon-zhuti1"></i>&nbsp;扩展</a></li>
        </ul>
    </Affix>
    </>
    )
}


