
import React, { useMemo } from 'react';
import { Section, ContentBlock, ContentType, QuizQuestion } from '../types';
import { SECTIONS } from '../constants';
import QuizModule from './QuizModule';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Info, CheckCircle2 } from 'lucide-react';

interface SectionRendererProps {
  section: Section;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const SectionRenderer: React.FC<SectionRendererProps> = ({ section }) => {
  
  // Logic for Final Quiz: Aggregate questions from all other sections
  const quizData = useMemo(() => {
    if (section.id === 'sec_final_quiz') {
      const allQuestions: QuizQuestion[] = [];
      SECTIONS.forEach(s => {
        if (s.quiz && s.id !== 'sec_final_quiz') {
          allQuestions.push(...s.quiz);
        }
      });
      return { questions: allQuestions, isFinal: true };
    }
    return { questions: section.quiz || [], isFinal: false };
  }, [section]);

  const renderBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case ContentType.PARAGRAPH:
        return (
          <div key={index} className="mb-6">
            {block.title && <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">{block.title}</h3>}
            <p className="text-slate-700 dark:text-slate-300 leading-7 text-lg">{block.text}</p>
          </div>
        );

      case ContentType.LIST:
      case ContentType.ORDERED_LIST:
        return (
          <div key={index} className="mb-6 pl-4">
             {block.title && <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">{block.title}</h3>}
            <ul className="space-y-2">
              {block.items?.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );

      case ContentType.INFO_BOX:
        return (
          <div key={index} className="mb-8 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <div className="flex items-center gap-2 mb-3">
              <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h4 className="font-bold text-blue-800 dark:text-blue-300 text-lg">{block.title || 'Key Fact'}</h4>
            </div>
            {block.text && <p className="text-slate-700 dark:text-slate-300 mb-3">{block.text}</p>}
            {block.items && (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {block.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );

      case ContentType.TABLE:
        return (
          <div key={index} className="mb-8 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            {block.title && <div className="bg-slate-100 dark:bg-slate-800 p-3 font-semibold text-center border-b border-slate-200 dark:border-slate-700">{block.title}</div>}
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 uppercase">
                <tr>
                  {block.tableHeaders?.map((header, idx) => (
                    <th key={idx} className="px-6 py-3 font-bold tracking-wider">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-900">
                {block.tableData?.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    {block.tableHeaders?.map((header, cIdx) => (
                      <td key={cIdx} className="px-6 py-4 whitespace-normal text-slate-600 dark:text-slate-400">
                        {row[header]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case ContentType.IMAGE:
        return (
          <figure key={index} className="mb-8">
            <div className="relative overflow-hidden rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
              <img 
                src={block.imageUrl} 
                alt={block.imageCaption || "Visual aid"} 
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {block.imageCaption && (
              <figcaption className="text-center text-sm text-slate-500 mt-2 italic">
                {block.imageCaption}
              </figcaption>
            )}
          </figure>
        );

      case ContentType.CHART_PIE:
        return (
          <div key={index} className="mb-8 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="text-center font-semibold mb-4 text-slate-800 dark:text-slate-200">{block.title}</h4>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={block.chartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {block.chartData?.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        );

        case ContentType.CHART_BAR:
        return (
          <div key={index} className="mb-8 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h4 className="text-center font-semibold mb-4 text-slate-800 dark:text-slate-200">{block.title}</h4>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={block.chartData}>
                   <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                   <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                   <Tooltip cursor={{fill: 'transparent'}} />
                   <Legend />
                   <Bar dataKey="inflation" name="Inflation Impact" fill="#ef4444" radius={[4, 4, 0, 0]} />
                   <Bar dataKey="liquidity" name="Liquidity Impact" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8 border-b border-slate-200 dark:border-slate-700 pb-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {section.title}
        </h2>
      </header>
      <article className="prose prose-slate dark:prose-invert max-w-none">
        {section.content.map((block, index) => renderBlock(block, index))}
      </article>
      
      {/* Quiz Section Integration */}
      {quizData.questions.length > 0 && (
        <div className="mt-16 border-t border-slate-200 dark:border-slate-700 pt-8">
           <QuizModule questions={quizData.questions} isFinalQuiz={quizData.isFinal} />
        </div>
      )}

      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center text-sm text-slate-500">
         <span>Last updated: October 2023</span>
         <span className="italic">Study Guide v1.0</span>
      </div>
    </div>
  );
};

export default SectionRenderer;
