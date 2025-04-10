import React from 'react'

const AICETExt = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="container mx-auto grow p-4">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold">
            AICTE - Extension For Approval Letter 2023-24
          </h2>
          <div className="h-[800px] w-full">
            {/* Adjust height as needed */}
            <object
              data="/AICTE_Approval_2023-24.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
              className="border border-gray-300"
            >
              <p>
                Unable to display PDF file.
                <a
                  href="/Service_Rules_WEF_1Jan2017.pdf"
                  className="text-blue-600 hover:underline"
                >
                  Download
                </a>{' '}
                instead.
              </p>
            </object>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AICETExt
