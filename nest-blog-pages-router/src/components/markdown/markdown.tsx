import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Image from 'next/image'

interface CodeProps extends React.ComponentPropsWithoutRef<'code'> {
  inline?: boolean
  children?: React.ReactNode
}

type MarkdownProps = {
  content: string
}

export function Markdown({ content }: MarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="heading-md mt-8 mb-6 first:mt-0 md:mb-8 md:text-heading-lg">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="heading-sm mt-6 mb-5 first:mt-0 md:mb-6 md:text-heading-md">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="heading-xs mt-4 mb-4 first:mt-0 md:mb-5 md:text-heading-sm">
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p className="body-sm mb-6 leading-relaxed text-gray-200">
            {children}
          </p>
        ),
        ul: ({ children }) => (
          <ul className="mb-6 ml-6 list-disc space-y-2 text-gray-200">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="mb-6 ml-6 list-decimal space-y-2 text-gray-200">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="body-sm pl-2 leading-relaxed">{children}</li>
        ),
        a: ({ children, href }) => (
          <a
            href={href}
            className="text-blue-200 underline-offset-4 transition-colors hover:text-blue-300 hover:underline"
          >
            {children}
          </a>
        ),
        img: (props) => (
          <figure className="my-8 overflow-hidden rounded-lg border border-gray-400 first:mt-0">
            <Image
              {...props}
              src={props.src || ''}
              alt={props.alt || ''}
              width={800}
              height={450}
              className="h-auto w-full object-cover"
            />
          </figure>
        ),
        blockquote: ({ children }) => (
          <blockquote className="my-6 border-l-4 border-blue-300 pl-4 text-gray-300 italic first:mt-0">
            {children}
          </blockquote>
        ),
        code: ({ inline, children, ...props }: CodeProps) => {
          if (inline) {
            return (
              <code className="rounded bg-gray-500 px-1.5 py-0.5 text-sm text-gray-100">
                {children}
              </code>
            )
          }
          return (
            <pre className="my-6 overflow-x-auto rounded-lg bg-gray-500 p-4 first:mt-0">
              <code className="body-xs text-gray-100" {...props}>
                {children}
              </code>
            </pre>
          )
        },
        hr: () => <hr className="my-8 border-t border-gray-400 first:mt-0" />,
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
