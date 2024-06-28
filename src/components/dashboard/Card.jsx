import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Image from 'next/image';
//import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

export default function ProfileCard({name,imgurl,bio}) {
  return (
    <Card sx={{ minHeight: '500px', width: 400 }}>
      <CardCover>
        <Image
          src={imgurl}
          srcSet={imgurl}
          loading="lazy"
          width={400}
          height={500}
          alt="23"
        />
      </CardCover>
      <CardCover sx={{background:'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',}}/>
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <Typography level="title-lg" textColor="#fff">
          {name}
        </Typography>
        <Typography
          // startDecorator={<LocationOnRoundedIcon />}
          textColor="neutral.300"
        >
          {bio}
        </Typography>
      </CardContent>
    </Card>
  );
}
