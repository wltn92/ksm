import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  const handleClick = (blog) => {
    window.open(blog);
  };

  return (
    <ImageList
      sx={{
        transform: 'translateZ(0)',
      }}
      rowHeight={200}
      gap={1}>
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem
            key={item.img}
            cols={cols}
            rows={rows}
            onClick={() => handleClick(item.blog)}>
            <img {...srcset(item.img, 250, 200, rows, cols)} alt={item.title} loading="lazy" />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200606_164%2F1591421555935WotoD_JPEG%2Fi2L4Pgjrxl6RZ2CtNHiHN5Da.jpg',
    title: '트라고',
    featured: true,
    blog: 'https://blog.naver.com/k29968/222412169797',
  },
  {
    img: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MjlfMTUx%2FMDAxNjI3NTYyMDkyOTY4.t4aswcVYhZwTNaa4o3PRquSkbW0pTCMVmhqb_MtpRNwg.e-f0E0qqGmjZk7P0UqQ3FQTITAurC5_6KGoKV70NstMg.JPEG.jennyisme%2FIMG_6768.jpg',
    title: '컴온캐주얼&루프탑펍',
    blog: 'https://blog.naver.com/kkonvelyyy/222350852766',
  },
  {
    img: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20211121_90%2F1637480853640wRAJ4_JPEG%2Fupload_b8d133a4d0c729796620b280fe54757c.jpeg',
    title: '하네집',
    blog: 'https://blog.naver.com/hyunju3933/222578469742',
  },
  {
    img: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMjlfMjYz%2FMDAxNjM4MTQ2MjgzMTM4.HU41FdN4mmGtQydTacJwrzoru7GCWbtm_pnHrOIPAT0g.piuIBLV-UHv0o4XIYAzAkAffUn0rs4tB5CBe7_6JhHUg.JPEG.jhbwwg1122%2F%25BE%25D8%25C6%25BC%25B5%25B5%25C6%25AE8.JPG',
    title: '엔티도트',
    blog: 'https://blog.naver.com/dja9797m/222479212877',
  },
  {
    img: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAxMjlfMjA0%2FMDAxNTgwMjg5MzI1OTM1.-WgDng4JbTstPIBWjuovesrd4XFlyBTle2FSsAtVJFAg.5Oarv5wtq4NwulxGj0xo-XTmK79ccvTUuUNqurUccgsg.JPEG.llllstyle%2FIMG_1776.jpg',
    title: '육회어때',
    blog: 'https://blog.naver.com/kikibu/222591357500',
  },
  {
    img: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTExMjdfMjY3%2FMDAxNjM4MDE3MTg4MzAw.1-xNJ0Mi0wuvUMNA_Edf9S7zdpSY8aIKoEvGtuDsrHwg.bK3nLtBStniVYFvtG5IAIYhx9t4DKx1awUSQxj9-Tnwg.JPEG.rachelim88%2FIMG_3988.jpg',
    title: '도화오뎅',
    featured: true,
    blog: 'https://blog.naver.com/tokihigh/222556722509',
  },
  {
    img: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20191108_172%2F1573190160278K1MB5_JPEG%2F_dwKxgBfvNfvbVPg3IgwIRkj.jpg',
    title: '세가프레도카페앤바',
    blog: 'https://blog.naver.com/domotokoko/221831399599',
  },
  {
    img: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA0MDFfMjE1%2FMDAxNTg1NzM5MjI1NTgw.SoRwC8MZa6fLniHsVeVnorJVc8c4-OpFTb4tlhPEK58g.Z9uJPkkhq9HoSKJ5oXhmYWqAQ_W5HbSQPejP7LRgHy8g.JPEG.boh0109%2Foutput_2029595525.jpg',
    title: '문스타파',
    blog: 'https://blog.naver.com/mhj5333/222511647972',
  },
  {
    img: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA0MjVfMSAg%2FMDAxNDkzMDk2MTc0MTQ3.Kb9tfFFtJmFoT2lanbG-vWhOOiPZFCXdWU7deUVLnikg.5tgFPguPgbHTxV3N79DJGjsE9NLYxUgOAcPFIGjvIh8g.JPEG.thesan_%2F%25BB%25E7%25BD%25C9%25B0%25A1%25B5%25E6_10.jpg',
    title: '사심 가득',
    featured: true,
    blog: 'https://blog.naver.com/jjingnii/222114518116',
  },
  {
    img: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTAzMTZfOTIg%2FMDAxNTUyNzExNDE4NjM5.AlR5VqQFGjGIq5krei2eTuNeihFqfNPSOtZUwUq0rm8g.U7ZbEWHOeaRiWWIXlv02WXyz6G7j0fJnpFAm0iP2NnIg.JPEG.el_elle%2F190310_yidomansion_1.jpg',
    title: '이도맨숀',
    blog: 'https://blog.naver.com/polarisians/222535612247',
  },
  {
    img: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200419_263%2F1587227110388m3zL3_JPEG%2FatPt8BBIsG5mZlWlpXNbi5IZ.jpg',
    title: '주가미락',
    blog: 'https://blog.naver.com/232072/222489500676',
  },
  {
    img: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20201214_150%2F1607938319603dfcqt_JPEG%2Fupload_90a9c824ed213be72f93f9f706a66c50.jpeg',
    title: '락희옥',
    blog: 'https://blog.naver.com/youngtaekoh_/222158033296',
  },
  {
    img: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210702_14%2F1625183613303kJrIE_JPEG%2Fupload_ed28cb60548d88d9a703a40ba0144d27.jpg',
    title: '황금콩밭',
    blog: 'https://blog.naver.com/bbode9205/222569313911',
  },
  {
    img: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210815_18%2F1629029663888przwz_JPEG%2Fupload_7e5a208551f12f1fe344e7d42e7a8ebc.jpeg',
    title: '스위그 뱅',
    blog: 'https://blog.naver.com/sienalis/222484179391',
  },
  {
    img: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMThfNDkg%2FMDAxNjE2MDIwODM1MDYw.aJtkygLlYl9ss87oP--pQC0JUqxWHu2L3aJncWLUWJgg.IOrcKWOnuptUaMbKQ93hYGMk1Wyaaomgj0HILIQwjRUg.JPEG.lke1742%2F1616020835679.jpg',
    title: '주주바',
    blog: 'https://blog.naver.com/spris1124/222241920482',
  },
];
