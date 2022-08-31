import React from 'react'
import {Affix, Button} from 'antd'
import "../header/header.less"
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const navigate = useNavigate()
    const frameOnclick = ()=>{
        navigate('/frame')
    }
    const headerOnclick = ()=>{
        navigate('/')
    }
    const devlopmentRecordOnclick = ()=>{
        navigate('/developmentRecoed')
    }
    const largeFontEndOnclick = ()=>{
        navigate('/largeFontEnd')
    }
    const extendOnclick = ()=>{
        navigate('/extend')
    }

  return (
    <>
    <Affix offsetTop={0} className="navbar-container">
        <div className="content">
        <ul>
            <li onClick={headerOnclick}><div><i className="iconfont icon-shouye"></i>&nbsp;首页</div></li>
            <li onClick={devlopmentRecordOnclick}><div><i className="iconfont icon-bijiben1"></i>&nbsp;开发记录</div></li>
            <li onClick={largeFontEndOnclick}><div><i className="iconfont icon-yuandaima"></i>&nbsp;大前端</div></li>
            <li onClick={frameOnclick}><div><i className="iconfont icon-zuzhijiagou1"></i>&nbsp;框架</div></li>
            <li onClick={extendOnclick}><div><i className="iconfont icon-zhuti1"></i>&nbsp;扩展</div></li>
        </ul>
        </div>
    </Affix>
    </>
    )
}


