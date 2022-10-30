import StarBorderIcon from '@mui/icons-material/StarBorder';
import { ICONS_FONT } from 'links';
import { useMemo } from 'react';
import Text from './Text';

export default function Ranking({ voters, votes, sx }) {
    const ranking = useMemo(() => {
        voters > 0 ? Math.round((votes / (voters)) * 10000) / 100 : 0
    }, [voters, votes]);
    return (
        <Text
            sx={{
                ...sx,
                display: 'flex'
            }}
            color={(ranking < 20 ? "error" : ranking < 50 ? "warning" : "success")}
        >
            <StarBorderIcon sx={{ fontSize: ICONS_FONT }} />{ranking + "%"}
        </Text>
    )
}