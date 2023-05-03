import React from "react"
import { useColorScheme,} from '@mui/material/styles';
import Button from '@mui/material/Button';

// theme icons
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';

import "./ThemeSwitcher.scss"

const ThemeSwitcher = () => {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // for server-side rendering
        // learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
        return null;
    }

    return (
        <Button
        id="themeBtn"
            variant="outlined"
            onClick={() => {
                if (mode === 'light') {
                    setMode('dark');
                } else {
                    setMode('light');
                }
            }}>
            { mode === 'light' ? <LightModeRoundedIcon/> : <DarkModeRoundedIcon/> }
        </Button>
    );
};

export default ThemeSwitcher