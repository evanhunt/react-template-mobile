import React from 'react';
import styles from './style.less';

export default class HelloAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        };
    }

    componentDidMount() {
        this.setState(() => ({
            username: 'layout',
        }));
    }

    clickMe = () => {
        console.log("i'm click");
    };

    render() {
        const { username } = this.state;
        return (
            <div
                className={styles.hello}
                onClick={this.clickMe}
                role="presentation"
            >
                <h1 className={styles.ignore}>responsive {username}</h1>
                <p className={`${styles.content} ${styles.ignore}`}>
                    采用新单位
                    <code className={styles.ignore}>vh</code>
                    <code className={styles.ignore}>vh</code>
                </p>
                <p className={`${styles.content} ${styles.ignore}`}>
                    写样式的时候照常使用
                    <code className={styles.ignore}>px</code>
                </p>
                <p className={`${styles.content} ${styles.ignore}`}>
                    编译时通过工具
                    <code className={styles.ignore}>
                        postcss-px-to-viewport
                    </code>
                    进行单位换算
                </p>
                <pre className={styles.ignore}>
                    {`/* before */
p.content{
    padding: 0 40px;
    margin: 0;
}
p.ignore{
    font-size: 14px;
    line-height: 1.6;
    color: #666;
}

/* after */
p.content{
    padding: 0 5.33333vw;
    margin: 0;
}
p.ignore{
    font-size: 14px;
    line-height: 1.6;
    color: #666;
}`}
                </pre>
                <p className={`${styles.content} ${styles.ignore}`}>
                    在<code className={styles.ignore}>layout</code>的同时,希望做到字体的字号是固定的
                </p>
                <p className={`${styles.content} ${styles.ignore}`}>
                    需要在<code className={styles.ignore}>className</code>
                    中添加<code className={styles.ignore}>ignore</code>
                    让工具转换的时候跳过这条样式规则
                </p>
            </div>
        );
    }
}
