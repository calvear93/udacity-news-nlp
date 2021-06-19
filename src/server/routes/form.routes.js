import { analyzeArticle } from '../services/nlp.service';

export async function exec({ body: { url } }, response)
{
    console.log('url', url, 'received');

    const { agreement, irony, sentence_list } = await analyzeArticle(url);

    response.send({
        agreement,
        irony,
        analysis: sentence_list
            .map(i => ({
                text: i.text,
                agreement: i.agreement,
                keywords: [ ...new Set(i.sentimented_concept_list.map(s => s.form)) ] // avoid duplicates
            }))
            .filter(i => i.keywords?.length > 0)
    });
}

// exports route
export default {
    path: '/api/nlp',
    method: 'post',
    exec
};
