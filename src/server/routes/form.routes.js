import { analyzeArticle } from '../services/nlp.service';

export async function exec({ body: { url } }, response)
{
    const { agreement, irony, sentence_list } = await analyzeArticle(url);

    response.send({
        agreement,
        irony,
        analysis: sentence_list
            .map(i => ({
                text: i.text,
                agreement: i.agreement,
                keywords: i.sentimented_concept_list
                    .map(s => s.form)
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
