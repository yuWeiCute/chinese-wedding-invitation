import React, { useEffect, useState, lazy, Suspense } from 'react';
import LoadingPage from './container/LoadingPage/LoadingPage';

// 使用lazy()包裹主页面组件，实现懒加载
const LazyMainPage = lazy(() => import('./container/MainPage'));

const App = () => {
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0); // 初始进度为0

  useEffect(() => {
    // 模拟加载过程，这里可以根据真实的异步加载过程来设置loading状态和加载进度
    const totalSteps = 100; // 总步数，可以根据实际情况调整
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep += 2;
      setLoadingProgress((currentStep / totalSteps) * 100);

      if (currentStep === totalSteps) {
        // 加载完成后，设置loading状态为false
        setLoading(false);
        clearInterval(timer);
      }
    }, 5); // 50ms模拟一步加载

    // 清除计时器
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Suspense fallback={<LoadingPage loadingProgress={loadingProgress} style={{ height: '100vh' }} />}>
        {loading ? (
          // 显示loading页面，并传递loading进度作为参数
          <LoadingPage loadingProgress={loadingProgress} />
        ) : (
          // 加载完成后显示主页面
          <LazyMainPage style={{ height: '100vh' }} />
        )}
      </Suspense>
    </div>
  );
};

export default App;
