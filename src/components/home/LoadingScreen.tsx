import { useProgress } from '@react-three/drei'

const LoadingScreen: React.FC = () => {
  const { progress, active } = useProgress()
  
  return active ? (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '#2c1810',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        width: '200px',
        height: '4px',
        background: '#4a3828',
        borderRadius: '2px',
        overflow: 'hidden',
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          background: '#e6c88e',
          transition: 'width 0.3s ease',
        }} />
      </div>
      <div style={{
        color: '#e6c88e',
        marginTop: '20px',
        fontFamily: 'Arial, sans-serif',
        fontSize: '14px',
      }}>
        Loading... {progress.toFixed(0)}%
      </div>
    </div>
  ) : null
}

export default LoadingScreen 