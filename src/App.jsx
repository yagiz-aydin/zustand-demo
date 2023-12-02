import { create } from 'zustand'
import CodePreview from './components/CodePreview'
import Details from './components/Details'
import Scene from './components/Scene'
import { mountStoreDevtool } from 'simple-zustand-devtools';

const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))


if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production' ) {
  mountStoreDevtool('COUNT_STORE', useStore);
}

function Counter() {
  const { count, inc } = useStore()
  return (
    <div className="counter">
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Scene />
      <div className="main">
        <div className="code">
          <div className="code-container">
            <CodePreview />
            <Counter />
          </div>
        </div>
        <Details />
      </div>
    </>
  )
}
