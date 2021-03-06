import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
  initialState: {
    child2: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 },
    ],
  },
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/chlid2').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
