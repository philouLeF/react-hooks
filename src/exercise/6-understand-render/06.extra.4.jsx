import { useState } from 'react';
import { ExpensiveComponent } from '../../toolbox/components/ExpensiveComponent.jsx';
import { useOnRenderStyle } from '../../toolbox/hooks/useOnRenderStyle.jsx';

const SmallComponentTop = () => {
  const ref = useOnRenderStyle();
  return (
    <div ref={ref} style={{ width: '100px', height: '100px' }}>
      SmallComponentLeft
    </div>
  );
};

const ScrollCounter = ({ children, topChildren }) => {
  const [scroll, setScroll] = useState(0);
  <div
    style={{ overflowY: 'scroll', height: '500px', paddingTop: '200px' }}
    onScroll={(e) => {
      setScroll(e.target.scrollTop);
    }}
  >
    {' '}
    <div style={{ height: '800px' }}>
      {topChildren}
      <p style={{ width: 'fit-content' }}>Hey, you scroll {scroll}</p>
      {children}
    </div>
  </div>;
};

const App = () => {
  return (
    <ScrollCounter topChildren={<SmallComponentTop />}>
      <ExpensiveComponent />
    </ScrollCounter>
  );
};

export default App;
