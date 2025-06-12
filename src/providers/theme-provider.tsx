import { ConfigProvider } from 'antd'
import React from 'react'

function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <ConfigProvider
                theme={{
                    token: {
                        // Seed Token
                        colorPrimary: '#31304D',
                        borderRadius: 2,
                    },
                    components:{
                        Button:{
                            colorPrimary:"#31304D",
                            controlHeight:48,
                            controlOutline:"none",
                            colorPrimaryHover:"#31304D",
                            colorBorder:"#31304D"
                        }
                    }
                }}
            >
                {children}
            </ConfigProvider>
        </div>
    )
}

export default ThemeProvider