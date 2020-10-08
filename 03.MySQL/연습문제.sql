연습 1) 2009년 데뷔 걸그룹
SELECT * FROM girl_group
 WHERE debut 
  between '2009-01-01' and '2009-12-31';

연습 2) 2009년 데뷔 걸그룹 히트송
SELECT l.name, l.debut, r.title
 FROM girl_group AS l #left
  INNER JOIN song AS r  #right 
   ON l.hit_song_id = r._id
	WHERE debut 
	BETWEEN '2009-0101' AND '2009-12-31';

연습 3) 대륙별 국가 숫자, gnp의 합, 평균 국가별 gnp?
SELECT continent, count(NAME), round(SUM(gnp)), round(AVG(gnp)) FROM country
  GROUP BY continent
 ORDER BY continent;

연습 4) 아시아 대륙에서 인구가 많은 국가 수 top 10 내림차순 대륙명 국가명 도시명 인구수

SELECT continent, NAME, localname, population FROM country
 WHERE continent LIKE 'asia'
  GROUP BY population 
  order by population desc
  LIMIT 10;

연습 5) 전 세계에서 인구가 가장 많은 10개 도시에서 사용하는 도시명 인구수 언어명
SELECT l.localname, l.population, r.Language
FROM country AS l
INNER JOIN countrylanguage AS r
ON l.code = r.countrycode
GROUP BY population
ORDER BY population DESC
LIMIT 10;